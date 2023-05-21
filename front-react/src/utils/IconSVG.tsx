import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';

export const IconCustom = (icon: string, props?: SvgIconProps) => {
  return (
    <SvgIcon {...props} fontSize="small">
      <path d={icon} />
    </SvgIcon>
  );
};
