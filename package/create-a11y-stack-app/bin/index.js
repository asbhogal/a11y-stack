#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function copyDirectory(source, destination) {
  const files = await fs.readdir(source, { withFileTypes: true });

  for (const file of files) {
    const srcPath = path.join(source, file.name);
    const destPath = path.join(destination, file.name);

    if (file.isDirectory()) {
      await fs.mkdir(destPath, { recursive: true });
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copyRootFiles(source, destination) {
  const files = await fs.readdir(source, { withFileTypes: true });

  for (const file of files) {
    if (!file.isDirectory()) {
      const srcPath = path.join(source, file.name);
      const destPath = path.join(destination, file.name);
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function createApp(appName) {
  console.log(`Creating ${appName}...`);

  const appDir = path.join(process.cwd(), appName);
  await fs.mkdir(appDir, { recursive: true });

  const sourceDir = path.dirname(__dirname); // Get the parent directory of this script

  const copyPromises = [
    copyDirectory(path.join(sourceDir, '.husky'), path.join(appDir, '.husky')),
    copyDirectory(
      path.join(sourceDir, '.storybook'),
      path.join(appDir, '.storybook'),
    ),
    copyDirectory(path.join(sourceDir, 'lib'), path.join(appDir, 'lib')),
    copyDirectory(path.join(sourceDir, 'app'), path.join(appDir, 'app')),
    copyDirectory(
      path.join(sourceDir, 'playwright-report'),
      path.join(appDir, 'playwright-report'),
    ),
    copyDirectory(
      path.join(sourceDir, 'stories'),
      path.join(appDir, 'stories'),
    ),
    copyDirectory(
      path.join(sourceDir, 'test-results'),
      path.join(appDir, 'test-results'),
    ),
    copyDirectory(path.join(sourceDir, 'tests'), path.join(appDir, 'tests')),
  ];

  // Copy root files
  await copyRootFiles(sourceDir, appDir);

  await Promise.all(copyPromises);

  console.log('\nInstalling dependencies...');
  process.chdir(appDir);

  return new Promise((resolve, reject) => {
    exec('npm install', { stdio: 'inherit' }, (error) => {
      if (error) {
        reject(new Error(`Failed to install dependencies: ${error.message}`));
      } else {
        console.log(`${appName} created successfully.`);
        resolve();
      }
    });
  });
}

async function main() {
  let appName;

  if (process.argv.length > 2 && process.argv[2] !== '') {
    appName = process.argv.slice(2)[0];
  } else {
    appName = await new Promise((resolve) => {
      readline.question('Please enter your app name: ', resolve);
    });
  }

  try {
    await createApp(appName);
  } catch (error) {
    console.error(error.message);
  } finally {
    readline.close();
  }
}

if (require.main === module) {
  main();
} else {
  module.exports = { createApp };
}
