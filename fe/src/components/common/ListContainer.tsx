import styled from 'styled-components';
import { COLOR } from 'styles/color';
import SIZE from 'styles/size';

const BORDER_COLOR = COLOR.GREY[300];

const Wrapper = styled.div`
  width: ${SIZE.LIST_CONTAINER.WIDTH}px;
  border-radius: ${SIZE.LIST_CONTAINER.BORDER_RADIUS}px;
  border: 1px solid ${BORDER_COLOR};
  overflow: hidden;

  .list-header {
    width: 100%;
    height: ${SIZE.LIST_CONTAINER.HEADER.HEIGHT}px;
    background-color: ${COLOR.GREY[100]};
    font-size: ${SIZE.LIST_CONTAINER.HEADER.FONT_SIZE}px;
    padding: ${SIZE.LIST_CONTAINER.HEADER.PADDING_TOP}px ${SIZE.LIST_CONTAINER.PADDING_LEFT}px;
    border-bottom: 1px solid ${BORDER_COLOR};
  }

  .list-body {
    width: 100%;
    background-color: ${COLOR.WHITE};

    &:nth-child(n) {
      height: ${SIZE.LIST_CONTAINER.BODY.ITEM_HEIGHT};
      padding: ${SIZE.LIST_CONTAINER.BODY.PADDING_TOP}px ${SIZE.LIST_CONTAINER.PADDING_LEFT}px;

      &:not(:last-child) {
        border-bottom: 1px solid ${BORDER_COLOR};
      }
    }
  }
`;

function ListContainer({ headerItem, children }: ListContainerProps) {
  return (
    <Wrapper>
      <div className="list-header">{headerItem}</div>
      <div className="list-body">{children}</div>
    </Wrapper>
  );
}

export default ListContainer;

interface ListContainerProps {
  headerItem: React.ReactNode;
  children: React.ReactNode;
}
