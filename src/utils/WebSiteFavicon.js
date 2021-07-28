/* eslint-disable  */
const ddgPrefix = 'https://icons.duckduckgo.com/ip3/'
const ddgNotPresentArray = ['instagram.com', 'youtube.com']


const getThroughHost = (link) => {
  let host="";
  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    const pathArray = link.split('/');
    host = pathArray[2];
  } else {
    const pathArray = link.split('/');
    host = pathArray[0];
  }
  return 'http://'+host+'/favicon.ico'
}

const getThroughDDG = (link) => {
  let host;
  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    const pathArray = link.split('/');
    host = pathArray[2];
  } else {
    const pathArray = link.split('/');
    host = pathArray[0];
  }

  return ddgPrefix+host+'.ico';
}

export const getFavicon = (link) => {
  for (let i = 0; i < ddgNotPresentArray.length; i++) {
    if(link.includes(ddgNotPresentArray[i])){
      const faviconUrl = getThroughHost(link)
      return faviconUrl;
    }
  }
  return getThroughDDG(link)
};
