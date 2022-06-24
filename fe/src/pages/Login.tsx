import styled from 'styled-components';
import Anchor from 'components/Login/Anchor';
import Logo from 'components/common/Logo';
import { flexCenterStyle } from 'styles/commonStyles';
import useGoodFetch from 'hooks/useGoodFetch';

const authorizeURL =
  'https://github.com/login/oauth/authorize?client_id=dd0ee875caf7ce9d591b&scope=id,name,email,avatar_url';

function Login() {
  // const fetchedData = useFetch({ url: 'https://reqres.in/api/products/3' });
  const { data } = useGoodFetch('https://reqres.in/api/products/3');
  console.log('data', data);

  return (
    <Wrapper>
      <Logo size="LARGE" />
      <Anchor name="GitHub 계정으로 로그인" href={authorizeURL} />
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  ${flexCenterStyle};
  flex-direction: column;
  height: 100%;

  > :not(:last-child) {
    margin-bottom: 60px;
  }
`;
