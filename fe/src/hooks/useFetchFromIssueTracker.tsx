import useFetch from './useFetch';

function useFetchFromIssueTracker({ url, options }: { url: string; options?: any }) {
  return useFetch({ url: `${process.env.REACT_APP_API_END_POINT}${url}`, options });
}

export default useFetchFromIssueTracker;
