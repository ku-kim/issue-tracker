import styled from 'styled-components';
import Text from 'components/common/Text';

function BlankMessage({ text }: { text: string }) {
  return (
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;

  & span {
    margin: auto 0;
  }
`;

export default BlankMessage;
