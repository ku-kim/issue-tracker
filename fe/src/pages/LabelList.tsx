import LabelItem, { LabelItemProps } from 'components/LabelItem';
import SubNav from 'components/SubNav';
import BlankMessage from 'components/common/BlankMessage';
import Header from 'components/common/Header';
import Label from 'components/common/Label';
import ListContainer from 'components/common/ListContainer';

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

const isEmptyData = LABEL_MOCK_DATA.length === 0;

function LabelList() {
  return (
    <main className="wrap">
      <Header avatarUrl="null" />
      <SubNav location="LABEL" linkTo="/" />
      <ListContainer headerItem={<div>헤더</div>}>
        {(!isEmptyData &&
          LABEL_MOCK_DATA.map(({ id, label, desc }) => (
            <LabelItem id={id} key={id} label={label} desc={desc} />
          ))) || <BlankMessage text="등록된 라벨이 없습니다" />}
      </ListContainer>
    </main>
  );
}

export default LabelList;
