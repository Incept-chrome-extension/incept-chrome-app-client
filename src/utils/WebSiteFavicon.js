/* eslint-disable  */
const ddgPrefix = 'https://icons.duckduckgo.com/ip3/'
const googlePrefix = 'https://s2.googleusercontent.com/s2/favicons?domain='
const ddgNotPresentArray = ['instagram.com']

const getThroughGoogle = (link) => {
  return googlePrefix+link;
}

const getThroughDDG = (link) => {
  let host;
  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    const pathArray = link.split('/');
    host = pathArray[2];
  } else {
    const pathArray = link.split('/');
    host = pathArray[0];
    setLink(`http://${link}`);
  }
  return ddgPrefix+host+'.ico';
}

export const getFavicon = (link) => {
  for (let i = 0; i < ddgNotPresentArray.length; i++) {
    if(link.includes(ddgNotPresentArray[i])){
      const faviconUrl = getThroughGoogle(link);
      return faviconUrl;
    }
  }
  return getThroughDDG(link)
};
