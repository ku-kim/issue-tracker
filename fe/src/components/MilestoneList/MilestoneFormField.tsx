import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import FormField from 'components/common/FormField';
import Input from 'components/common/Input/Input';
import usePost from 'hooks/usePost';

function MilestoneFormField() {
  const [isChangedRequiredValue, setIsChangedRequiredValue] = useState(false);
  const post = usePost();

  return (
    <FormField
      name="새로운 마일스톤 추가"
      disabled={!isChangedRequiredValue}
      onSubmit={handleSubmission}
    >
      <Column>
        <Row>
          <Input
            name="milestone"
            template="SMALL"
            placeholder="마일스톤 이름"
            width="600px"
            setIsChangedRequiredValue={setIsChangedRequiredValue}
          />
          <Input
            name="dueDate"
            template="SMALL"
            placeholder="완료일(선택) ex. YYYY-MM-DD"
            width="600px"
          />
        </Row>
        <Input name="desc" template="SMALL" placeholder="설명(선택)" width="1216px" />
      </Column>
    </FormField>
  );

  function handleSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const title = target.milestone.value;
    const dueDate = target.dueDate.value;
    const desc = target.desc.value;

    const body = {
      title,
      dueDate,
      description: desc,
    };

    post({ url: 'http://3.34.52.237:8080/api/milestones', body });
  }
}

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default MilestoneFormField;
