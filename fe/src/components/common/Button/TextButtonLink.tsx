import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import ButtonLink from './ButtonLink';

function TextButtonLink({ color, children, to }: TextButtonLinkProps) {
  return (
    <ButtonLink
      template="SMALL_TEXT"
      backgroundColor={{ initial: COLOR.WHITE }}
      fontStyles={{
        fontColor: {
          initial: color,
        },
        fontSize: FONT.SIZE.X_SMALL,
        fontWeight: FONT.WEIGHT.BOLD,
      }}
      to={`/${to}`}
    >
      {children}
    </ButtonLink>
  );
}

export default TextButtonLink;

interface TextButtonLinkProps {
  color: string;
  to: string;
  children: React.ReactNode;
}
