import { Navigate, useSearchParams } from 'react-router-dom';
import Loading from 'components/common/Loading';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import useLocalStorage from 'hooks/useLocalStorage';

const USER_DEFAULT_NAME = '익명의 쿼카';

function Callback() {
  const [searchParams] = useSearchParams();
  const [, setAccessToken] = useLocalStorage({ key: 'user_info' });

  const code = searchParams.get('code');
  const { data, error } = useFetchFromIssueTracker({
    url: `api/login/token?code=${code}`,
  });

  if (error) {
    return <div>실패</div>;
  }

  if (!data) {
    return <Loading />;
  }

  const { accessToken, name, email, avatarUrl } = data;
  const userData = { accessToken, name: name || USER_DEFAULT_NAME, email, avatarUrl };
  setAccessToken(userData);

  return <Navigate to="/issueList" />;
}

export default Callback;
