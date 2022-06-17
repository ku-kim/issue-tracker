import styled from 'styled-components';
import IssueLabel from 'components/IssueLabel';
import Icon from 'components/common/Icon';
import Label from 'components/common/Label';
import Logo from 'components/common/Logo';
import Text from 'components/common/Text';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

function Template() {
  return (
    <Wrap>
      <Title>Logo</Title>
      <Column>
        <Logo size="medium" />
        <Logo size="large" />
      </Column>
      <Title>Text Regular</Title>
      <Column>
        <Text size={FONT.SIZE.SMALL}>템플릿 페이지입니다.</Text>
        <Text size={FONT.SIZE.MEDIUM}>템플릿 페이지입니다.</Text>
        <Text size={FONT.SIZE.LARGE}>템플릿 페이지입니다.</Text>
        <Text size={FONT.SIZE.X_LARGE}>템플릿 페이지입니다.</Text>
      </Column>
      <Title>Text Bold</Title>
      <Column>
        <Text size={FONT.SIZE.SMALL} weight={FONT.WEIGHT.BOLD}>
          템플릿 페이지입니다.
        </Text>
        <Text size={FONT.SIZE.MEDIUM} weight={FONT.WEIGHT.BOLD}>
          템플릿 페이지입니다.
        </Text>
        <Text size={FONT.SIZE.LARGE} weight={FONT.WEIGHT.BOLD}>
          템플릿 페이지입니다.
        </Text>
        <Text size={FONT.SIZE.X_LARGE} weight={FONT.WEIGHT.BOLD}>
          템플릿 페이지입니다.
        </Text>
      </Column>
      <Title>Icons</Title>
      <Row>
        <Icon icon="alertCircle" />
        <Icon icon="archive" />
        <Icon icon="calendar" />
        <Icon icon="checkBoxActive" />
        <Icon icon="checkBoxDisable" />
        <Icon icon="checkBoxInitial" />
        <Icon icon="checkOffCircle" />
        <Icon icon="checkOnCircle" />
        <Icon icon="edit" />
        <Icon icon="milestone" />
        <Icon icon="paperclip" />
        <Icon icon="plus" />
        <Icon icon="refresh" />
        <Icon icon="search" />
        <Icon icon="smile" />
        <Icon icon="tag" />
        <Icon icon="trash" />
        <Icon icon="xSquare" />
      </Row>
      <Title>Greyscale</Title>
      <Row>
        <Color color={COLOR.BLACK} />
        <Color color={COLOR.GREY[600]} />
        <Color color={COLOR.GREY[500]} />
        <Color color={COLOR.GREY[400]} />
        <Color color={COLOR.GREY[300]} />
        <Color color={COLOR.GREY[200]} />
        <Color color={COLOR.GREY[100]} />
        <Color color={COLOR.WHITE} />
      </Row>
      <Title>Colors</Title>
      <Row>
        <Color color={COLOR.BLUE[300]} />
        <Color color={COLOR.BLUE[200]} />
        <Color color={COLOR.BLUE[100]} />
        <Color color={COLOR.PURPLE[300]} />
        <Color color={COLOR.PURPLE[200]} />
        <Color color={COLOR.PURPLE[100]} />
        <Color color={COLOR.RED[300]} />
        <Color color={COLOR.RED[200]} />
        <Color color={COLOR.RED[100]} />
        <Color color={COLOR.GREEN[300]} />
        <Color color={COLOR.GREEN[200]} />
        <Color color={COLOR.GREEN[100]} />
      </Row>
      <Title>Label</Title>
      <Column>
        <Label backgroundColor={COLOR.GREY[100]} color={COLOR.BLACK}>
          라벨 이름
        </Label>
        <Label backgroundColor={COLOR.GREY[600]} color={COLOR.WHITE}>
          라벨 이름
        </Label>
        <Label backgroundColor={COLOR.WHITE} color={COLOR.GREY[500]} borderColor={COLOR.GREY[300]}>
          라벨 이름
        </Label>
      </Column>
      <Title>Issue Label</Title>
      <Column>
        <IssueLabel state="open" />
        <IssueLabel state="close" />
      </Column>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
`;

const Title = styled.div`
  font-size: 32px;
  font-style: italic;
`;

const Color = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color};
`;

export default Template;