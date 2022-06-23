import { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import SIZE from 'styles/size';
import DropdownBtn from '../common/DropdownBtn';
import Icon from '../common/Icon';

const INPUT_ID = 'filter-input';

function FilterBar({ placeholder }: { placeholder: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    setInputText(target.value);
  };

  return (
    <Wrapper isFocused={isFocused}>
      <FilterDropdown
        name="필터"
        startLocation="LEFT"
        width={`${SIZE.FILTER_BAR.WIDTH}px`}
        height="100%"
        gap={SIZE.FILTER_BAR.GAP}
      >
        <div>이런이런이런</div>
      </FilterDropdown>

      <InputArea isFocused={isFocused} className=" flex-center">
        <label htmlFor={INPUT_ID} className="flex-center">
          <Icon icon="search" stroke="inherit" />
          <InputText
            type="text"
            id={INPUT_ID}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={onChange}
            value={inputText}
          />
        </label>
      </InputArea>
    </Wrapper>
  );
}

export default FilterBar;

const Wrapper = styled.div<{ isFocused: boolean }>`
  width: 601px;
  height: 40px;
  display: flex;
  border-radius: 11px;
  border: 1px solid ${({ isFocused }) => (isFocused ? COLOR.BLACK : COLOR.GREY[300])};
  background-color: ${({ isFocused }) => (isFocused ? COLOR.WHITE : COLOR.GREY[300])};
`;

const FilterDropdown = styled(DropdownBtn)`
  &:hover {
    background-color: ${COLOR.GREY[300]};
  }
`;

const InputArea = styled.div<{ isFocused: boolean }>`
  width: 472px;
  height: 100%;
  stroke: ${COLOR.GREY[400]};
  background-color: ${({ isFocused }) => (isFocused ? COLOR.WHITE : COLOR.GREY[200])};
  border-left: 1px solid ${COLOR.GREY[300]};
  stroke: ${({ isFocused }) => (isFocused ? COLOR.GREY[500] : COLOR.GREY[400])};
`;

const InputText = styled.input`
  width: 400px;
  height: 28px;
  font-size: ${FONT.SIZE.SMALL};
  margin-left: 10px;
  background-color: transparent;

  &::placeholder {
    color: ${COLOR.GREY[400]};
  }

  &:focus {
    color: ${COLOR.BLACK};
  }
`;
