import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import Checkbox from './Checkbox';
import Avatar from './common/Avatar';
import Icon from './common/Icon';
import Label from './common/Label';
import Text from './common/Text';

function IssueItem({ number, title, author, milestone }: IssueItemProps) {
  // TODO: createdAt으로 몇 분전 처리 ^^
  return (
    <Wrapper>
      <Checkbox />
      <Contents>
        <Title>
          <Icon icon="alertCircle" stroke={COLOR.BLUE[200]} fill={COLOR.BLUE[100]} />
          <Text size={FONT.SIZE.MEDIUM} weight={FONT.WEIGHT.BOLD}>
            {title}
          </Text>
          <Label color={COLOR.WHITE} backgroundColor={COLOR.BLUE[300]}>
            documentation
          </Label>
        </Title>
        <IssueInfo>
          <Text size={FONT.SIZE.SMALL} color={COLOR.GREY[500]}>
            #{number} 이 이슈가 8분 전, {author}님에 의해 작성되었습니다 {milestone}
          </Text>
        </IssueInfo>
      </Contents>
      <Avatar size="SMALL" imgSource="null" />
    </Wrapper>
  );
}

type IssueItemProps = {
  number: number;
  title: string;
  author: string;
  milestone: string;
};

const Wrapper = styled.div`
  display: flex;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const IssueInfo = styled.div``;

export default IssueItem;
