/**
 * @file response.js
 * @author gaofei
 */

 module.exports = {

    get body() {
        return this._body;
    },

    /**
     * @des 设置返回给客户端的body内容
     * 
     * @param {mixed} data body 内部
     */
    set body(data) {
        this._body = data;
    }, 

    get status() {
        return this.res.statusCode;
    },
    /**
     * @des 设置返回给客户端的statusCode的
     * 
     * @param {number} statusCode 状吗
     */
    set status(statusCode) {
        if (typeof statusCode !== 'number') {
            throw new Error('statusCode must be a number!!!');
        }
        this.res.statusCode = statusCode;
    }

 };