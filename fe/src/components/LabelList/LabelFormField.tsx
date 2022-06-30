import { useState } from 'react';
import FormField from 'components/common/FormField';

function LabelFormField() {
  const [isChangedRequiredValue] = useState(false);
  return (
    <FormField name="새로운 라벨 추가" disabled={!isChangedRequiredValue}>
      하이염
    </FormField>
  );
}

export default LabelFormField;
