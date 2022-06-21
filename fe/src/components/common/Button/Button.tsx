import styled from 'styled-components';
import { buttonStyle, BUTTON_STYLES, ButtonProps } from './button.style';

function Button({
  template,
  onClick,
  children,
  disabled,
  width = `${BUTTON_STYLES[template].SIZE.WIDTH}px`,
  height = `${BUTTON_STYLES[template].SIZE.HEIGHT}px`,
  borderStyle = BUTTON_STYLES[template].BORDER_STYLE,
  fontStyles = {
    fontSize: BUTTON_STYLES[template].FONT_STYLE.SIZE,
    fontColor: { initial: BUTTON_STYLES[template].FONT_STYLE.COLOR },
    fontWeight: BUTTON_STYLES[template].FONT_STYLE.WEIGHT,
  },
  backgroundColor,
  className,
}: ButtonProps) {
  return (
    <CustomButton
      className={`ellipsis ${className}`}
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      borderStyle={borderStyle}
      fontSize={fontStyles.fontSize}
      fontWeight={fontStyles.fontWeight}
      fontColor={fontStyles.fontColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </CustomButton>
  );
}

export default Button;

const CustomButton = styled.button`
  ${buttonStyle};
`;
