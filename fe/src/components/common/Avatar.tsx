import styled from 'styled-components';
import { COLOR } from 'styles/color';
import SIZE from 'styles/size';

function Avatar({ size, imgSource }: { size: AvatarTemplateType; imgSource: string }) {
  return (
    <Div size={size}>
      <img src={imgSource} alt="회원 아바타 이미지" width="100%" height="100%" />
    </Div>
  );
}

const AVATAR_STYLES = {
  BACKGROUND_COLOR: COLOR.GREY[300],
  BORDER_RADIUS: 50,
};

const Div = styled.div<{ size: AvatarTemplateType }>`
  background-color: ${AVATAR_STYLES.BACKGROUND_COLOR};
  width: ${({ size }) => SIZE.AVATAR[size]}px;
  height: ${({ size }) => SIZE.AVATAR[size]}px;
  overflow: hidden;
  border-radius: ${AVATAR_STYLES.BORDER_RADIUS}%;
`;

type AvatarTemplateType = keyof typeof SIZE.AVATAR;

export default Avatar;
