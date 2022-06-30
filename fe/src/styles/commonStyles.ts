import { css } from 'styled-components';
import SIZE from './size';

const mainHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ellipsisStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const wrapStyle = css`
  width: ${SIZE.WIDTH}px;
  max-width: ${SIZE.WIDTH}px;
  margin: 0 auto;
`;

const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { mainHeaderStyle, ellipsisStyle, flexCenterStyle, wrapStyle };
