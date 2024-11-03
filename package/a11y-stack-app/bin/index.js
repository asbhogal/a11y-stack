#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copyDirectory(source, destination) {
  const dirPath = path.resolve(__dirname, "..", source);
  const destPath = path.resolve(process.cwd(), destination);

  return new Promise((resolve, reject) => {
    fs.mkdir(destPath, { recursive: true }, (err) => {
      if (err) {
        reject(
          new Error(
            `Failed to create directory: ${destPath}. Error: ${err.message}`,
          ),
        );
        return;
      }

      fs.readdir(dirPath, (err, files) => {
        if (err) {
          reject(
            new Error(
              `Failed to read directory: ${dirPath}. Error: ${err.message}`,
            ),
          );
          return;
        }

        if (!files || files.length === 0) {
          console.log(`No files found in ${dirPath}`);
          resolve(); // Resolve even if no files were copied
          return;
        }

        let totalFiles = files.length;
        let copiedFiles = 0;

        console.log(`Copying ${totalFiles} files...`);

        files.forEach((file) => {
          const srcPath = path.join(dirPath, file);
          const destFile = path.join(destPath, file);

          fs.stat(srcPath, (err, stats) => {
            if (err) {
              reject(
                new Error(
                  `Failed to stat file: ${srcPath}. Error: ${err.message}`,
                ),
              );
              return;
            }

            if (stats.isDirectory()) {
              copyDirectory(file, path.join(destination, file))
                .then(() => {
                  copiedFiles++;
                  updateProgress(totalFiles, copiedFiles);
                })
                .catch(reject);
            } else {
              try {
                fs.copyFileSync(srcPath, destFile);
                copiedFiles++;
                updateProgress(totalFiles, copiedFiles);
              } catch (err) {
                reject(
                  new Error(
                    `Failed to copy file: ${srcPath} to ${destFile}. Error: ${err.message}`,
                  ),
                );
              }
            }
          });
        });

        function updateProgress(total, current) {
          const percentage = Math.floor((current / total) * 100);
          process.stdout.write(`\rCopied ${percentage}% (${current}/${total})`);
        }

        // Wait for all promises to resolve
        setTimeout(() => {
          if (copiedFiles === totalFiles || copiedFiles === 0) {
            console.log("\nCopy complete.");
            resolve();
          }
        }, 100); // Small delay to ensure all async ops have completed
      });
    });
  });
}

async function createApp(appName) {
  console.log(`Creating ${appName}...`);

  try {
    const appDir = path.join(process.cwd(), appName);
    await fs.promises.mkdir(appDir, { recursive: true });

    await copyDirectory(".husky", path.join(appDir, ".husky"));
    await copyDirectory(".storybook", path.join(appDir, ".storybook"));
    await copyDirectory("lib", path.join(appDir, "lib"));
    await copyDirectory("app", path.join(appDir, "app"));
    await copyDirectory(
      "playwright-report",
      path.join(appDir, "playwright-report"),
    );
    await copyDirectory("stories", path.join(appDir, "stories"));
    await copyDirectory("test-results", path.join(appDir, "test-results"));
    await copyDirectory("tests", path.join(appDir, "tests"));

    console.log("\nInstalling dependencies...");

    process.chdir(appDir);

    execSync("npm install", { stdio: "inherit" });

    console.log(`${appName} created successfully.`);
  } catch (error) {
    console.error("Error creating app:", error.message);
    console.error(error.stack);
  }
}

async function main() {
  let appName;

  if (process.argv.length > 2 && process.argv[2] !== "") {
    appName = process.argv.slice(2)[0];
  } else {
    appName = await new Promise((resolve) => {
      readline.question("Please enter your app name: ", resolve);
    });
  }

  createApp(appName);

  readline.close();
}

main();

module.exports = {
  copyDirectory,
};
