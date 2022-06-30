import { useState } from 'react';
import styled from 'styled-components';
import FormField from 'components/common/FormField';
import Input from 'components/common/Input/Input';
import Label from 'components/common/Label';
import { COLOR } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';

const TEXT_COLOR = {
  LIGHT: COLOR.WHITE,
  DARK: COLOR.BLACK,
};

function LabelFormField() {
  const [isChangedRequiredValue, setIsChangedRequiredValue] = useState(false);
  const [labelTitle, setLabelTitle] = useState('');
  const [labelStyle] = useState({
    textColor: TEXT_COLOR.DARK,
    backgroundColor: COLOR.GREY[200],
    title: '레이블 이름',
  });

  const handleOnChange = ({ target }: { target: HTMLInputElement }) => {
    setLabelTitle(target.value);
  };

  // const $labelTitleInput = useRef(null);

  return (
    <FormField name="새로운 라벨 추가" disabled={!isChangedRequiredValue}>
      <FieldInnerItem>
        <LabelPreview>
          <Label color={labelStyle.textColor} backgroundColor={labelStyle.backgroundColor}>
            {labelTitle || '레이블 이름'}
          </Label>
        </LabelPreview>
        <LabelInputWrap>
          <Input
            placeholder="레이블 이름"
            template="SMALL"
            setIsChangedRequiredValue={setIsChangedRequiredValue}
            inputValue={labelTitle}
            onChange={handleOnChange}
            maxLength={20}
            width="100%"
          />
          <Input placeholder="설명(선택)" template="SMALL" width="100%" />
        </LabelInputWrap>
      </FieldInnerItem>
    </FormField>
  );
}

export default LabelFormField;

const FieldInnerItem = styled.div`
  height: 90px;
  display: grid;
  grid-template-columns: 2fr 7fr;
`;

const LabelPreview = styled.div`
  height: 100%;
  ${flexCenterStyle};
`;

const LabelInputWrap = styled.div`
  > :not(:last-child) {
    margin-bottom: 16px;
  }
`;
