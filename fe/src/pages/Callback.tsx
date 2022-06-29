import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import useLocalStorage from 'hooks/useLocalStorage';

function Callback() {
  const [searchParams] = useSearchParams();
  const [, setAccessToken] = useLocalStorage({ key: 'user_info' });

  const code = searchParams.get('code');
  const { data, error } = useFetchFromIssueTracker({
    url: `api/login/token?code=${code}`,
  });

  const navigate = useNavigate();

  if (error) {
    return <div>실패</div>;
  }

  if (!data) {
    return <div>로딩중</div>;
  }

  const { accessToken, name, email, avatarUrl } = data;

  const newData = { accessToken, name: name || '익명의 쿼카', email, avatarUrl };

  setAccessToken(newData);

  navigate('/issueList');

  return <div />;
}

export default Callback;
