const dw = require('../index')
const path = require('path')
const fs = require('fs')
const Jimp = require('jimp')
function getAbsolutePath(fileName) {
  return path.join(__dirname, fileName)
}
//EnCode Image add digital watermarking
let srcFileName = getAbsolutePath('7.jpg')
let watermarkText = '@#$%^&98'
let enCodeFileName = getAbsolutePath('7_enCode.jpg')
let deCodeFileName = getAbsolutePath('7_deCode.jpg')

async function run() {
  
  //encode from buffer
  const enCodeFileRes = await dw.transformImageBufferWithText(
    fs.readFileSync(srcFileName),
    watermarkText
  )
  
  await enCodeFileRes.writeAsync(enCodeFileName)
  
  //decode from buffer
  const deCodeFileRes = await dw.getTextFormImageBuffer(
    fs.readFileSync(enCodeFileName)
  )

  await deCodeFileRes.writeAsync(deCodeFileName)
}
run()
