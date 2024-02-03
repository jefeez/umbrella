const setItem = (prefix: string, data: any) => {
  localStorage.setItem(prefix, JSON.stringify(data));
};

const getItem = (prefix: string) => {
  const json = localStorage.getItem(prefix);
  if (json) {
    return JSON.parse(json);
  }
  return '';
};

const removeItem = (prefix: string) => {
  localStorage.removeItem(prefix);
};

export default { setItem, getItem, removeItem };
