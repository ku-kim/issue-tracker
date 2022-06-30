import styled from 'styled-components';
import { COLOR } from 'styles/color';
import SIZE from 'styles/size';

function ListContainer({
  headerItem,
  children,
  width = `${SIZE.LIST_CONTAINER.WIDTH}px`,
}: ListContainerProps) {
  return (
    <Wrapper width={width}>
      <ListHeader>{headerItem}</ListHeader>
      <ListBody>{children}</ListBody>
    </Wrapper>
  );
}

export default ListContainer;

const BORDER_COLOR = COLOR.GREY[300];

const Wrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  border-radius: ${SIZE.LIST_CONTAINER.BORDER_RADIUS}px;
  border: 1px solid ${BORDER_COLOR};
  margin-bottom: 27px;
  overflow: hidden;
`;

const ListHeader = styled.div`
  width: 100%;
  height: ${SIZE.LIST_CONTAINER.HEADER.HEIGHT}px;
  display: flex;
  align-items: center;
  background-color: ${COLOR.GREY[100]};
  font-size: ${SIZE.LIST_CONTAINER.HEADER.FONT_SIZE}px;
  padding: ${SIZE.LIST_CONTAINER.HEADER.PADDING_TOP}px ${SIZE.LIST_CONTAINER.PADDING_LEFT}px;
  border-bottom: 1px solid ${BORDER_COLOR};
`;

const ListBody = styled.div`
  width: 100%;
  background-color: ${COLOR.WHITE};

  > :nth-child(n) {
    min-height: ${SIZE.LIST_CONTAINER.BODY.ITEM_HEIGHT}px;
    padding: ${SIZE.LIST_CONTAINER.BODY.PADDING_TOP}px ${SIZE.LIST_CONTAINER.PADDING_LEFT}px;

    &:not(:last-child) {
      border-bottom: 1px solid ${BORDER_COLOR};
    }
  }
`;
interface ListContainerProps {
  width?: string;
  headerItem: React.ReactNode;
  children: React.ReactNode;
}
