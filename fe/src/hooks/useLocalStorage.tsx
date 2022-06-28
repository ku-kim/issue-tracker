function useLocalStorage({ key }: { key: string }): any {
  return [getValue(), setValue];

  function getValue() {
    const item = localStorage.getItem(key);
    return JSON.parse(item as string);
  }

  function setValue(value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default useLocalStorage;
