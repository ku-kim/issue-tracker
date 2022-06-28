import { useEffect, useReducer } from 'react';

type State = {
  data?: object;
  error?: Error;
};

const INIT_STATE: State = { data: {}, error: undefined };

function useFetch({ url, options }: { url: string; options?: RequestInit }) {
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
      return { ...INIT_STATE, data: action.data };
    case 'error':
      return { ...INIT_STATE, error: action.error };
    default:
      return state;
  }
}

export default useFetch;
