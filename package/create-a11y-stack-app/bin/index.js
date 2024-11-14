#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function copyRootFiles(source, destination) {
  const files = await fs.readdir(source, { withFileTypes: true });

  for (const file of files) {
    if (!file.isDirectory()) {
      const srcPath = path.join(source, file.name);
      const destPath = path.join(destination, file.name);
      await fs.copyFile(srcPath, destPath);
    } else {
      fs.mkdir(path.join(destination, file.name), { recursive: true });

      await copyRootFiles(
        path.join(source, file.name),
        path.join(destination, file.name),
      );
    }
  }
}

async function createApp(appName) {
  console.log(`Creating ${appName}...`);

  const appDir = path.isAbsolute(appName)
    ? path.join(appName)
    : path.join(process.cwd(), appName);

  try {
    await fs.access(appDir);
    throw new Error(`Error: Directory ${appDir} already exists.`);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  await fs.mkdir(appDir, { recursive: true });

  const scriptDir = path.dirname(__dirname);
  const sourceDir = path.resolve(scriptDir, '.');

  await copyRootFiles(sourceDir, appDir);

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
