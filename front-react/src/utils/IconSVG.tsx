/* eslint-disable react/react-in-jsx-scope */
import SvgIcon, {type SvgIconProps} from '@mui/material/SvgIcon';

export const IconCustom = (icon: string, props?: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} fontSize="small">
      <path d={icon} />
    </SvgIcon>
  );
};
