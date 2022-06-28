// import { useEffect } from 'react';

// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import useLocalStorage from 'hooks/useLocalStorage';

function Callback() {
  const [searchParams] = useSearchParams();
  const [, setAccessToken] = useLocalStorage({ key: 'user_info' });

  const code = searchParams.get('code');
  const { data: userDataResponse, error } = useFetchFromIssueTracker({
    url: `api/login/token?code=${code}`,
  });

  if (error) {
    return <div>실패</div>;
  }

  if (!userDataResponse) {
    return <div>로딩중</div>;
  }

  // if (userDataResponse.data) {
  const { accessToken: token, name, email, avatarUrl } = userDataResponse;

  const newData = { token, name: name || '익명의 쿼카', email, avatarUrl };

  setAccessToken(newData);
  // }
  return <div>나는 콜백 페이지야.</div>;
}

export default Callback;
