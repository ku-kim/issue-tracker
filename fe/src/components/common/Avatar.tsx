import { COLOR } from 'styles/color';

const AVATAR_SIZE = {
  large: '44px',
  small: '20px',
};

function Avatar({ size, imgSource }: { size: 'large' | 'small'; imgSource: string }) {
  return (
    <div
      style={{
        backgroundColor: COLOR.GREY[300],
        borderRadius: '50%',
        overflow: 'hidden',
        width: AVATAR_SIZE[size],
        height: AVATAR_SIZE[size],
      }}
    >
      <img src={imgSource} alt="회원 아바타 이미지" width="100%" height="100%" />
    </div>
  );
}

export default Avatar;
