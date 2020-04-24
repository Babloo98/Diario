export const setLocalstorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getLocalstorage = key => {
    return JSON.parse(localStorage.getItem(`${key}`) || null);
  };
  
  export const removeItemFromLocalStorage = key => {
    localStorage.removeItem(key);
  };
  
  export const serialize = obj => {
    const str = [];
    if (Array.isArray(obj)) {
      let keys = obj;
      keys.forEach(value => {
        let key = Object.keys(value)[0];
        str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value[key])}`);
      });
    } else {
      let keys = Object.keys(obj);
      keys.forEach(key => {
        str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      });
    }
    return str.join("&");
  };