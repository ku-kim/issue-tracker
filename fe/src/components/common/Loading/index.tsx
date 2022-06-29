import styled from 'styled-components';
import Spinner from 'components/common/Loading/Spinner';
import { flexCenterStyle } from 'styles/commonStyles';

function Loading() {
  return (
    <Wrap>
      <Spinner />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  ${flexCenterStyle}
`;

export default Loading;
