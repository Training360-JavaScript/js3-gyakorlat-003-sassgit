const setCookie = (str, token = 'token') => document.cookie = `${token}=${str}; expires=${new Date(Date.now() + 15 * 60 * 1000).toUTCString()}`;

// setCookie(5, 'viewed');
// setCookie('354774631237', 'uid');
// setCookie('Bx55OWbHJ0Vt_IGIF', 'ssid');

const cookieHandler = {
  getAll: () => {
    const all = document.cookie;
    return all.split('; ').reduce((obj, e) => {
      const a =  e.split('=');
      obj[a[0]] = a[1];
      return obj;
    }, {});
  },
  toSessionStorage: function() {
    const all = this.getAll();
    for (const e in all) sessionStorage.setItem(e, all[e]);
  },
  flush: function(){
    const all = this.getAll();
    const delstr = `= ; expires=${new Date(0).toUTCString()}`;
    for (const e in all) document.cookie = e + delstr;
  },
};

export { cookieHandler };