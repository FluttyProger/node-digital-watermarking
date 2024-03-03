const dw = require('../index')
const path = require('path')
const fs = require('fs')
const Jimp = require('jimp')
function getAbsolutePath(fileName) {
  return path.join(__dirname, fileName)
}
//EnCode Image add digital watermarking
let srcFileName = getAbsolutePath('2.jpg')
let watermarkText = '^*98@#$%'
let fontSize = 1.0
let enCodeFileName = getAbsolutePath('2_enCode.jpg')
async function run() {

  let startTime = new Date().getTime();
  await dw.transformImageWithText(
    srcFileName,
    watermarkText,
    fontSize,
    enCodeFileName,
  )
  console.log('runTime',new Date().getTime()-startTime);

  //DeCode Image get digital watermarking
  startTime = new Date().getTime();
  let deCodeFileName = getAbsolutePath('2_deCode.jpg')
  await dw.getTextFormImage(enCodeFileName, deCodeFileName)
  console.log('runTime',new Date().getTime()-startTime);

}
run()
