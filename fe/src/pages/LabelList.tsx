import LabelItem, { LabelItemProps } from 'components/LabelItem';
import SubNav from 'components/SubNav';
import BlankMessage from 'components/common/BlankMessage';
import Header from 'components/common/Header';
import Label from 'components/common/Label';
import ListContainer from 'components/common/ListContainer';
import Text from 'components/common/Text';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

const LABEL_MOCK_DATA: LabelItemProps[] = [
  {
    id: '123',
    label: (
      <Label color="white" backgroundColor="blue">
        라벨1
      </Label>
    ),
    desc: '123 라벨에 대한 설명',
  },
  {
    id: '234',
    label: (
      <Label color="white" backgroundColor="green">
        label test
      </Label>
    ),
    desc: 'label test 라벨에 대한 설명',
  },
  {
    id: '343',
    label: (
      <Label color="white" backgroundColor="red">
        또 다른 라벨
      </Label>
    ),
    desc: '또 다른 라벨에 대한 설명',
  },
];

const dataCount = LABEL_MOCK_DATA.length;
const isEmptyData = dataCount === 0;

function LabelList() {
  return (
    <main className="wrap">
      <Header avatarUrl="null" />
      <SubNav location="LABEL" />
      <ListContainer
        headerItem={
          <Text weight={FONT.WEIGHT.BOLD} color={COLOR.GREY[500]}>
            {dataCount}개의 레이블
          </Text>
        }
      >
        {(!isEmptyData &&
          LABEL_MOCK_DATA.map(({ id, label, desc }) => (
            <LabelItem id={id} key={id} label={label} desc={desc} />
          ))) || <BlankMessage text="등록된 이 없습니다" />}
      </ListContainer>
    </main>
  );
}

export default LabelList;