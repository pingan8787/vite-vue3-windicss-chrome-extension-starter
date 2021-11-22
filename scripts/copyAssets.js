const path = require('path')
const fs = require('fs')

const copyList = [
  { src: 'src/script', dest: 'dist' },
  { src: 'src/libs', dest: 'dist/libs' },
  { src: 'src/assets/image', dest: 'dist/assets' },
]

/**
 * 读取路径信息
 * @param {string} path 路径
 */
const getStat = path => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    })
  })
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
const mkdir = dir => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })
}

/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
const dirExists = async (dir) => {
  let isExists = await getStat(dir);
  //如果该路径且不是文件，返回true
  if (isExists && isExists.isDirectory()) {
    return true;
  } else if (isExists) {     //如果该路径存在但是文件，返回false
    return false;
  }
  //如果该路径不存在
  let tempDir = path.parse(dir).dir;      //拿到上级路径
  //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
  let status = await dirExists(tempDir);
  let mkdirStatus;
  if (status) {
    mkdirStatus = await mkdir(dir);
  }
  return mkdirStatus;
}

const isExist = (path) => { // 判断文件夹是否存在, 不存在创建一个
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

// 复制文件操作
const copyFile = async (sourcePath, targetPath) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true })
  await dirExists(targetPath);

  sourceFile.forEach(file => {
    const newSourcePath = path.resolve(sourcePath, file.name)
    const newTargetPath = path.resolve(targetPath, file.name)
    if (file.isDirectory()) {
      isExist(newTargetPath)
      copyFile(newSourcePath, newTargetPath)
    }
    // if (file.name.endsWith('.mp4')) { // 需要复制其他的格式的文件修改 .mp4 既可
    fs.copyFileSync(newSourcePath, newTargetPath)
    // }
  })
}

const copyListFile = () => {
  copyList.forEach(async item => {
    await copyFile(item.src, item.dest);
  })
}

copyListFile()