import styled from 'styled-components';
import { COLOR } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';
import FONT from 'styles/font';
import ButtonLink from './Button/ButtonLink';
import Text from './Text';

function Error({ message }: { message?: string }) {
  return (
    <Wrapper>
      <TextContainer>
        <Text size={FONT.SIZE.LARGE} weight={FONT.WEIGHT.BOLD}>
          ⚠️ Something went wrong! ⚠️
        </Text>
        <Text>{message || '오류가 발생했습니다. 다시 시도해주세요.'}</Text>
      </TextContainer>
      <ButtonLink to="/" template="MEDIUM_STANDARD" backgroundColor={{ initial: COLOR.BLUE[200] }}>
        돌아가기
      </ButtonLink>
    </Wrapper>
  );
}

export default Error;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenterStyle}
  flex-direction: column;
`;

const TextContainer = styled.div`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;
