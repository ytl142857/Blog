const setItem = (key: string, value: any) => {
  localStorage.setItem(`CHESTNUT_${key.toUpperCase()}`, value);
};

const getItem = (key: string) => {
  try {
    return localStorage.getItem(`CHESTNUT_${key.toUpperCase()}`) as string;
  } catch (err) {
    return "";
  }
};

const removeItem = (key: string) => {
  localStorage.removeItem(`CHESTNUT_${key.toUpperCase()}`);
};

export const $storage = {
  get token() {
    return getItem("token");
  },
  set token(data: string) {
    setItem("token", data);
  },
  clear() {
    removeItem("token");
  },
};
