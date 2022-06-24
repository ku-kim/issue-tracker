import styled from 'styled-components';
import { COLOR } from 'styles/color';
import SIZE from 'styles/size';

function LinearGraph({ totalCount, doneCount }: LinearGraphProps) {
  if (doneCount > totalCount) {
    throw new Error('doneCount는 totalCount를 초과하여 입력할 수 없습니다.');
  }

  const donePercent = totalCount ? (doneCount / totalCount) * 100 : 0;

  return (
    <Wrapper>
      <FilledGraph percent={donePercent} />
    </Wrapper>
  );
}

export default LinearGraph;

const Wrapper = styled.div`
  width: ${SIZE.LINEAR_GRAPH.WIDTH}px;
  height: ${SIZE.LINEAR_GRAPH.HEIGHT}px;
  background-color: ${COLOR.GREY[100]};
  border-radius: 10px;
  overflow: hidden;
`;

const FilledGraph = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: ${COLOR.BLUE[200]};
`;

type LinearGraphProps = {
  totalCount: number;
  doneCount: number;
};
