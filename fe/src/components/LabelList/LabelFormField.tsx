import { useState } from 'react';
import styled from 'styled-components';
import FormField from 'components/common/FormField';
import Input from 'components/common/Input/Input';
import Label from 'components/common/Label';
import { LABEL_COLORS } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';
import BackgroundColorSelect from './BackgroundColorSelect';
import LabelSelectItem from './LabelSelectItem';
import TextColorSelect, { TextColorTypes } from './TextColorSelect';

function LabelFormField() {
  const [isChangedRequiredValue, setIsChangedRequiredValue] = useState(false);
  const [labelTitle, setLabelTitle] = useState('');
  const [textColor, setTextColor] = useState<TextColorTypes>('DARK');
  const [backgroundColor, setBackgroundColor] = useState(LABEL_COLORS[0]);

  const handleOnChange = ({ target }: { target: HTMLInputElement }) => {
    setLabelTitle(target.value);
  };

  return (
    <FormField name="새로운 라벨 추가" disabled={!isChangedRequiredValue}>
      <FieldInnerItem>
        <LabelPreview>
          <Label color={textColor} backgroundColor={backgroundColor}>
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
          <LabelSelectItems>
            <LabelSelectItem title="배경 색상">
              <BackgroundColorSelect color={backgroundColor} setColor={setBackgroundColor} />
            </LabelSelectItem>
            <LabelSelectItem title="텍스트 색상">
              <TextColorSelect color={textColor} setColor={setTextColor} />
            </LabelSelectItem>
          </LabelSelectItems>
        </LabelInputWrap>
      </FieldInnerItem>
    </FormField>
  );
}

export default LabelFormField;

const FieldInnerItem = styled.div`
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

const LabelSelectItems = styled.div`
  display: flex;
  gap: 16px;
`;
