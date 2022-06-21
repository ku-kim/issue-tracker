import styled from 'styled-components';

function Label({ backgroundColor, color, children, borderColor }: LabelProps) {
  return (
    <Wrap backgroundColor={backgroundColor} color={color} borderColor={borderColor}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div<WrapProps>`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ borderColor }) => borderColor && `1px solid ${borderColor}`};
`;

type LabelProps = {
  backgroundColor: string;
  color: string;
  children: React.ReactNode;
  borderColor?: string;
};

type WrapProps = Omit<LabelProps, 'children'>;

export default Label;
