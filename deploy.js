// Copy this file to an untracked file, like `d.js` & execute it.

const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');
const path = require('path');
const child_process = require('child_process');

async function main() {
    // 1. Build.
    execSync(`ng build --prod`);

    // 2. Switch to deploy branch, make sure `dist` folder is untracked first.
    const deployBranch = 'master';
    execSync(`git checkout ${deployBranch}`);
    await sleep(5000);
    execSync(`git status -s`);

    // 3. Remove old files.
    const ignoreFolders = ['.git', 'dist', 'node_modules'];
    const ignoreFiles = [path.basename(__filename), '404.html', '.gitignore'];
    fs.readdirSync('.').forEach(fileOrFolder => {
        const isFolder = fs.lstatSync(fileOrFolder).isDirectory();
        if (isFolder && !ignoreFolders.includes(fileOrFolder)) {
            removeFolder(fileOrFolder);
        } else if (!isFolder && !ignoreFiles.includes(fileOrFolder)) {
            removeFile(fileOrFolder);
        }
    });

    // 4. Replace by new files.
    const projectName = 'blog'; // This is the folder after the `dist/` from the `outputPath` in `angular.json`.
    console.log(`Replace by new files...`);
    fsExtra.copySync(`dist/${projectName}`, '.')
    removeFolder('dist');

    console.log('DONE!');
}

main();

function execSync(command) {
    console.log(`> ${command}`);
    child_process.execSync(command, { stdio: 'inherit' });
}

function removeFile(path) {
    console.log(`Removing file ${path}...`);
    fs.unlinkSync(path);
}

function removeFolder(path) {
    console.log(`Removing folder ${path}...`);
    rimraf.sync(path);
}

async function sleep(millisecond) {
    await new Promise(resolve => setTimeout(resolve, millisecond));
}
