import { useEffect, useReducer } from 'react';

type State = {
  data?: object;
  error?: Error;
};

function useFetch({ url, options }: { url: string; options?: RequestInit }) {
  const INIT_STATE: State = { data: {}, error: undefined };

  const [state, dispatch] = useReducer(fetchReducer, INIT_STATE);

  useEffect(() => {
    if (!url) return;

    fetchData();

    async function fetchData() {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const resJSON = await res.json();
        dispatch({ type: 'fetch', data: resJSON });
      } catch (error) {
        dispatch({ type: 'error', error });
      }
    }
  }, []);

  return state;
}

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

export default useFetch;
