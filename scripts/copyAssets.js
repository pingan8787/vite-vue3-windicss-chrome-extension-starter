const path = require('path')
const fs = require('fs')

const copyList = [
    { src: 'src/script', dest: 'dist' },
    { src: 'src/assets/image', dest: 'dist/assets' },
]

const isExist = (path) => { // 判断文件夹是否存在, 不存在创建一个
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

const copyFile = (sourcePath, targetPath) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true })

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
    copyList.forEach(item => {
        copyFile(item.src, item.dest);
    })
}

copyListFile()