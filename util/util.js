/**
 * Created by Administrator on 2017/3/6.
 */
function getJSON(url, method, data, async) {
  var promise = new Promise(function(resolve, reject) {
    //get请求-拼接url
    if(method.toLowerCase() == 'get') {
      var _data = [];
      if(typeof data == 'object') {
        for(var k in data) {
          _data.push(k + '=' + data[k]);
          _data.join('&');
        }
      }
      url += (url.indexOf('?' == -1) ? '?' : '') + _data;
    }
    //post请求-转换字符串
    if(method.toLowerCase() == 'post') {
      var arrs = [];
      if(typeof data == 'object') {
        for(var k in data) {
          arrs.push(k + '=' + data[k]);
        }
        data = arrs.join('&');
      }
    }
    //创建发送请求
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); //兼容ie
    xhr.open(method, url);
    if(method == 'post') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(data);
    } else {
      xhr.send(null);
    }
    xhr.onreadystatechange = handler;
    //返回状态判断
    function handler() {
      if(this.readyState !== 4) {
        return;
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });
  return promise;
};


module.exports = {
  getJson: getJSON
}