import { useEffect, useReducer } from 'react';

type State = {
  data?: object;
  error?: Error;
};

function useFetch({ url, options }: { url: string; options?: RequestInit }) {
  const INIT_STATE: State = { data: { 난: '초기값' }, error: undefined };
  function fetchReducer(state: any, action: any) {
    switch (action.type) {
      case 'fetch':
        return { ...state, data: action.data };
      case 'error':
        return { ...state, error: action.error };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, INIT_STATE);

  useEffect(() => {
    if (!url) {
      return;
    }
    async function fetchData() {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const resJSON = await res.json();
        dispatch({ action: 'fetch', data: resJSON });
      } catch (e) {
        dispatch({ action: 'error', error: e });
      }
    }

    fetchData();
  }, []);

  return state;
}

export default useFetch;
