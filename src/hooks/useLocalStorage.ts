const useLocalStorage = () => {
  const setItem = (key: string, value: string) =>
    localStorage.setItem(key, JSON.stringify(value));

  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    const initialValue = JSON.parse(item as string);
    return initialValue || "";
  };

  const removeItem = (key: string) => localStorage.removeItem(key);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
