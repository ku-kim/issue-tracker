import { useSearchParams } from 'react-router-dom';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import useLocalStorage from 'hooks/useLocalStorage';

function Callback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const data = useFetchFromIssueTracker({ url: `api/login/token?code=${code}` });
  const [accessToken, setAccessToken] = useLocalStorage({ key: 'ACCESS_TOKEN' });

  setAccessToken(data.accessToken);

  console.log(accessToken);

  return <div>나는 콜백 페이지야.</div>;
}

export default Callback;
