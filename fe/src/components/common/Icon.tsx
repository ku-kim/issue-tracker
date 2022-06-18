import { ReactComponent as AlertCircle } from 'assets/alert-circle.svg';
import { ReactComponent as Archive } from 'assets/archive.svg';
import { ReactComponent as Calendar } from 'assets/calendar.svg';
import { ReactComponent as CheckBoxActive } from 'assets/check-box-active.svg';
import { ReactComponent as CheckBoxDisable } from 'assets/check-box-disable.svg';
import { ReactComponent as CheckBoxInitial } from 'assets/check-box-initial.svg';
import { ReactComponent as CheckOffCircle } from 'assets/check-off-circle.svg';
import { ReactComponent as CheckOnCircle } from 'assets/check-on-circle.svg';
import { ReactComponent as Edit } from 'assets/edit.svg';
import { ReactComponent as Milestone } from 'assets/milestone.svg';
import { ReactComponent as Paperclip } from 'assets/paperclip.svg';
import { ReactComponent as Plus } from 'assets/plus.svg';
import { ReactComponent as Refresh } from 'assets/refresh.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Smile } from 'assets/smile.svg';
import { ReactComponent as Tag } from 'assets/tag.svg';
import { ReactComponent as Trash } from 'assets/trash.svg';
import { ReactComponent as XSquare } from 'assets/x-square.svg';
import { COLOR } from 'styles/color';

const iconComponents = {
  alertCircle: AlertCircle,
  archive: Archive,
  calendar: Calendar,
  checkBoxActive: CheckBoxActive,
  checkBoxDisable: CheckBoxDisable,
  checkBoxInitial: CheckBoxInitial,
  checkOffCircle: CheckOffCircle,
  checkOnCircle: CheckOnCircle,
  edit: Edit,
  milestone: Milestone,
  paperclip: Paperclip,
  plus: Plus,
  refresh: Refresh,
  search: Search,
  smile: Smile,
  tag: Tag,
  trash: Trash,
  xSquare: XSquare,
};

function Icon({ icon, fill = 'none', stroke = COLOR.BLACK }: IconProps) {
  const SelectedIcon = iconComponents[icon];

  if (!SelectedIcon) {
    throw new Error(`${icon} 컴포넌트를 찾을 수 없습니다. `);
  }

  return <SelectedIcon fill={fill} stroke={stroke} />;
}

export default Icon;

type IconComponentsKeys = keyof typeof iconComponents;

interface IconProps {
  icon: IconComponentsKeys;
  fill?: string;
  stroke?: string;
}
