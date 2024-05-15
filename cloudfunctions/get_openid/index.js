// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'cloud1-1go5f0ho92b593c1' }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

    return {
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}