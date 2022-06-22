import { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import Icon from '../common/Icon';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return isChecked ? (
    <Wrapper onClick={() => setIsChecked(false)}>
      <Icon icon="checkBoxActive" fill={COLOR.BLUE[200]} stroke={COLOR.WHITE} />
    </Wrapper>
  ) : (
    <Wrapper onClick={() => setIsChecked(true)}>
      <Icon icon="checkBoxInitial" stroke={COLOR.GREY[300]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0;
  cursor: pointer;
  margin: auto 0;
  margin-right: 32px;
`;

export default Checkbox;
