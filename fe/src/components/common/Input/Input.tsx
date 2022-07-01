import { useState } from 'react';
import SIZE from 'styles/size';
import { CustomLabel, InputProps, InputWrap, Wrapper } from './Input.style';

function Input({
  template = 'MEDIUM',
  placeholder,
  name,
  width = `${SIZE.INPUT[template].WIDTH}px`,
  height = `${SIZE.INPUT[template].HEIGHT}px`,
  inputLabel = '',
  inputId,
  setIsChangedRequiredValue,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    setInputText(target.value);

    if (!setIsChangedRequiredValue) {
      return;
    }
    if (!target.value) {
      setIsChangedRequiredValue(false);
      return;
    }
    if (target.value) {
      setIsChangedRequiredValue(true);
    }
  };
  return (
    <Wrapper width={width} height={height} isFocused={isFocused} template={template}>
      {inputLabel && (
        <CustomLabel height={height} isFocused={isFocused} template={template} htmlFor={inputId}>
          {inputLabel}
        </CustomLabel>
      )}
      <InputWrap isFocused={isFocused} template={template}>
        <input
          name={name}
          placeholder={isFocused ? '' : placeholder}
          onChange={onChange}
          value={inputText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id={inputId}
          style={{ background: 'transparent' }}
        />
      </InputWrap>
    </Wrapper>
  );
}

export default Input;
