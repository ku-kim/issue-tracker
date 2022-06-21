import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle, BUTTON_STYLES, ButtonProps } from './button.style';

function ButtonLink({
  template,
  children,
  width = `${BUTTON_STYLES[template].SIZE.WIDTH}px`,
  height = `${BUTTON_STYLES[template].SIZE.HEIGHT}px`,
  borderStyle = BUTTON_STYLES[template].BORDER_STYLE,
  fontStyles = {
    fontSize: BUTTON_STYLES[template].FONT_STYLE.SIZE,
    fontColor: { initial: BUTTON_STYLES[template].FONT_STYLE.COLOR },
    fontWeight: BUTTON_STYLES[template].FONT_STYLE.WEIGHT,
  },
  backgroundColor,
  to,
  className,
  ...props
}: ButtonProps & LinkProps) {
  return (
    <CustomButtonLink
      className={`ellipsis flex-center ${className}`}
      width={width}
      height={height}
      borderStyle={borderStyle}
      fontSize={fontStyles.fontSize}
      fontWeight={fontStyles.fontWeight}
      fontColor={fontStyles.fontColor}
      backgroundColor={backgroundColor}
      to={to}
      {...props}
    >
      {children}
    </CustomButtonLink>
  );
}

export default ButtonLink;

const CustomButtonLink = styled(Link).withConfig({
  shouldForwardProp: (prop) =>
    ![
      'width',
      'height',
      'borderStyle',
      'fontSize',
      'fontColor',
      'fontWeight',
      'backgroundColor',
    ].includes(prop),
})`
  ${buttonStyle};
`;
