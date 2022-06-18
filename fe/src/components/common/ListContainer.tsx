import styled from 'styled-components';
import { COLOR } from 'styles/color';

const LIST_CONTAINER_SIZE_PIXEL = {
  WIDTH: 1280,
  PADDING_LEFT: 32,
  BORDER_RADIUS: 16,
  HEADER: {
    HEIGHT: 64,
    PADDING_TOP: 18,
    FONT_SIZE: 16,
  },
  BODY: {
    ITEM_HEIGHT: 100,
    PADDING_TOP: 16,
  },
};

const Wrapper = styled.div`
  width: ${LIST_CONTAINER_SIZE_PIXEL}px;
  border-radius: ${LIST_CONTAINER_SIZE_PIXEL.BORDER_RADIUS}px;
  border: 1px solid ${COLOR.GREY[500]};
  padding: 0 ${LIST_CONTAINER_SIZE_PIXEL.PADDING_LEFT}px;

  .list-header {
    width: 100%;
    height: ${LIST_CONTAINER_SIZE_PIXEL.HEADER.HEIGHT}px;
    background-color: ${COLOR.GREY[100]};
    font-size: ${LIST_CONTAINER_SIZE_PIXEL.HEADER.FONT_SIZE}px;
    padding: ${LIST_CONTAINER_SIZE_PIXEL.HEADER.PADDING_TOP}px 0;
  }

  .list-body {
    width: 100%;
    background-color: ${COLOR.WHITE};
  }

  .list-body-item {
    height: ${LIST_CONTAINER_SIZE_PIXEL.BODY.ITEM_HEIGHT};
    padding: ${LIST_CONTAINER_SIZE_PIXEL.BODY.PADDING_TOP}px 0;
  }
`;

function ListContainer({ headerItem, bodyItems }: ListContainerProps) {
  return (
    <Wrapper>
      <div className="list-header">{headerItem}</div>
      <div className="list-body">
        {bodyItems.map((bodyItem) => (
          <div className="list-body-item">{bodyItem}</div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ListContainer;

interface ListContainerProps {
  headerItem: React.ReactNode;
  bodyItems: React.ReactNode[];
}
