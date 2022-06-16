import { COLOR } from 'styles/color';

function Avatar({ size, imgSource }: { size: '44px' | '20px'; imgSource: string }) {
  return (
    <div
      style={{
        backgroundColor: COLOR.GREY[300],
        borderRadius: '50%',
        overflow: 'hidden',
        width: size,
        height: size,
      }}
    >
      <img src={imgSource} alt="회원 아바타 이미지" width="100%" height="100%" />
    </div>
  );
}

export default Avatar;
