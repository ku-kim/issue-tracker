function useLocalStorage<T>({ key }: { key: string }): [() => T | null, (value: T) => void] {
  return [getValue, setValue];

  function getValue(): T {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  function setValue(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default useLocalStorage;
