import Icon from 'components/common/Icon';
import SIZE from 'styles/size';

function Logo({ size }: LogoProps) {
  switch (size) {
    case 'large':
      return <Icon icon="logo" width={SIZE.LOGO.LARGE.WIDTH} height={SIZE.LOGO.LARGE.HEIGHT} />;
    case 'medium':
      return <Icon icon="logo" width={SIZE.LOGO.MEDIUM.WIDTH} height={SIZE.LOGO.MEDIUM.HEIGHT} />;
    default:
      throw new Error(`size: ${size}의 타입이 잘못되었습니다.`);
  }
}

type LogoProps = {
  size: string;
};

export default Logo;
