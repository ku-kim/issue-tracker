import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import Button from './Button';

function TextButton({ color, children }: TextButtonProps) {
  return (
    <Button
      width="fit-contents"
      template="MEDIUM_TEXT"
      backgroundColor={{ initial: 'transparent' }}
      fontStyles={{
        fontColor: {
          initial: `${color}`,
          active: COLOR.BLACK,
          hover: COLOR.GREY[600],
          disabled: COLOR.GREY[400],
        },
        fontWeight: FONT.WEIGHT.BOLD,
      }}
      borderStyle="border: 0; padding: 0;"
    >
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Button>
  );
}

export default TextButton;

interface TextButtonProps {
  color: string;
  children: React.ReactNode;
}

const ChildrenWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
`;
