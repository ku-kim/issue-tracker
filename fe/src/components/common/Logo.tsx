import Icon from 'components/common/Icon';
import SIZE from 'styles/size';

function Logo({ size }: { size: LogoSizeType }) {
  switch (size) {
    case 'LARGE':
      return <Icon icon="logo" width={SIZE.LOGO.LARGE.WIDTH} height={SIZE.LOGO.LARGE.HEIGHT} />;
    case 'MEDIUM':
      return <Icon icon="logo" width={SIZE.LOGO.MEDIUM.WIDTH} height={SIZE.LOGO.MEDIUM.HEIGHT} />;
    default:
      throw new Error(`size: ${size}의 타입이 잘못되었습니다.`);
  }
}

type LogoSizeType = keyof typeof SIZE.LOGO;

export default Logo;
