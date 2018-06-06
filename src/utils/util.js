import consts from '../config/consts.js';
// 获取设备类型
export function getDeviceType() {
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    try {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        //window.location.href = "http://www.baidu.com";
        return 'mobile';
        // ipad
      } else if (/iPad/i.test(navigator.userAgent)) {
        return 'pad'
      } else {
        // window.location.href = "http://www.qq.com"
        return 'other';
      }
    } catch (e) {
      return 'other';
    }
  } else {
    //window.location.href = "http://www.qq.com"
    return 'pc';
  }
}
// 根据设备类型跳转
export function redirectByDeviceType(type) {
  let url = '';
  switch (type) {
    case 'mobile':
      url = consts.mobileUrl;
      break;
    default:
      url = consts.pcUrl;
  }
  window.location.href = url;
}
/*
 * 从地址栏返回认证信息
*/
export function getSecurityHeaderFromUrl() {
  // 解析url参数
  const searchObj = getSearchParams();
  // 无JSESSIONID直接退出
  if (Object.keys(searchObj).indexOf('JSESSIONID') < 0) {
    return false;
  }
  const securityHeader = {
    security_api_username: searchObj.username,
    security_api_password: searchObj.JSESSIONID,
    security_api_type: 'Y',
  };
  // 存储到认证信息及用户名到sessionStorage
  const securityHeaderString = JSON.stringify(securityHeader);
  window.sessionStorage.setItem('authorized', securityHeaderString);
  if (hasProperty(securityHeader, 'security_api_username') >= 0) {
    window.sessionStorage.setItem('username', securityHeader.security_api_username);
  }
  const opts = {
    headers: {
      'security-header': securityHeaderString,
    },
  };
  return opts;
}

