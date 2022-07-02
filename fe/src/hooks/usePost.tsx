import useLocalStorage from './useLocalStorage';

function usePost() {
  const [getAccessTokenFromLocalStorage] = useLocalStorage({ key: 'ACCESS_TOKEN' });
  function post({ url, body }: { url: string; body: object }) {
    const accessToken = getAccessTokenFromLocalStorage();
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    return fetch(url, options);
  }
  return post;
}

export default usePost;
