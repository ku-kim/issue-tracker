import useFetch from './useFetch';

function useFetchFromIssueTracker({ url, options }: { url: string; options?: RequestInit }) {
  const data = useFetch({ url: `${process.env.REACT_APP_API_END_POINT}${url}`, options });
  return data;
}

export default useFetchFromIssueTracker;
