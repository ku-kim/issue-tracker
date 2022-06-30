import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

function Text({
  size = FONT.SIZE.SMALL,
  weight = FONT.WEIGHT.REGULAR,
  color = COLOR.BLACK,
  children,
}: TextProps) {
  return (
    <Span size={size} weight={weight} color={color}>
      {children}
    </Span>
  );
}

type TextProps = {
  size?: string;
  weight?: number;
  color?: string;
  children: React.ReactNode;
};

type SpanProps = Omit<TextProps, 'children'>;

const Span = styled.span<SpanProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;

export default Text;
