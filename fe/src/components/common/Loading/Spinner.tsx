import styled, { keyframes } from 'styled-components';

function Spinner() {
  return <Circle />;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 25px solid #2c3e50;
  border-radius: 50%;
  border-top-color: #7f8c8d;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
