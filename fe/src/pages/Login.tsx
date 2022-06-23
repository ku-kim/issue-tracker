import styled from 'styled-components';
import ButtonLink from 'components/common/Button/ButtonLink';
import Logo from 'components/common/Logo';
import { COLOR } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';
import FONT from 'styles/font';

function Login() {
  return (
    <Wrapper>
      <Logo size="LARGE" />
      <ButtonLink
        template="LARGE"
        backgroundColor={{ initial: COLOR.BLACK }}
        fontStyles={{ fontColor: { initial: COLOR.WHITE }, fontWeight: FONT.WEIGHT.BOLD }}
        to="/"
      >
        <ButtonText>GitHub 계정으로 로그인</ButtonText>
      </ButtonLink>
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

const ButtonText = styled.span`
  ${flexCenterStyle};
`;
