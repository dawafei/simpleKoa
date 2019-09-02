/**
 * @file context.js
 * @author gaofei
 */

let proto = {};

function delegateSet(property, name) {
    proto.__defineSetter__(name, function(val) {
        this[property][name] = val
    })
}

function delegateGet(property, name) {
    proto.__defineGetter__(name, function() {
        return this[property][name]
    })
}

// 定义request中要代理的setter和getter
let requestSet = [];
let requestGet = ['query'];

// 定义response中要代理的setter和getter
let responseSet = ['body', 'status'];
let responseGet = responseSet;

requestSet.forEach(ele => {
    delegateSet('request',ele);
})

requestGet.forEach(ele => {
    delegateGet('request',ele);
})

responseSet.forEach(ele => {
    delegateSet('response',ele);
})

responseGet.forEach(ele => {
    delegateSet('response',ele);
})

module.exports = proto;

//  module.exports = {
//     get query() {
//         return this.requst.query;
//     },

//     get body() {
//         return this.response.body;
//     },

//     set body(data) {
//         return this.response.body = data;
//     },

//     get status() {
//         return this.response.status;
//     },

//     set status( ) {
//         return this.response.status = statusCode;
//     }
//  }