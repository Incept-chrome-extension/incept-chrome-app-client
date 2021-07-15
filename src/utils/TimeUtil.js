/* eslint-disable import/prefer-default-export */
export const format = (time) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};
