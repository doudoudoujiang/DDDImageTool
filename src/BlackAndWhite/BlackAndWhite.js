const sharp = require('sharp');

let imgData = {
    path:'',
    format: ''
}; //图片信息

/**
 * 获得图片色彩改成黑白，源地址生成新图片
 * @param {String} input 
 */
 export default function BlackAndWhite(input) {
    let buffer = getImg(input)
    .tint({
        r: 255,
        g: 255,
        b: 255
    })
    .toFile(imgData.path+Date.now()+'.'+imgData.format)
}

/**
 * 保存图片信息，返回图片sharp实例
 * @param {Sting} input 
 * @returns sharp实例
 */
function getImg(input) {
    imgData.path = input.split('.')[0];
    imgData.format = input.split('.').slice(-1)[0];
    console.log(input.split('.'));
    return sharp(input);
}