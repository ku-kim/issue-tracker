import styled from 'styled-components';
import Avatar from 'components/common/Avatar';
import Logo from 'components/common/Logo';
import SIZE from 'styles/size';

function Header({ avatarUrl }: { avatarUrl: string }) {
  return (
    <Wrapper>
      <Logo size="MEDIUM" />
      <Avatar size="LARGE" imgSource={avatarUrl} />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  height: ${SIZE.HEADER.HEIGHT}px;
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
`;
