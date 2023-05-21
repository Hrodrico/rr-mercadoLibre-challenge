import React from 'react';
import {ListItem, ListItemIcon, ListItemText, Tooltip, type TooltipProps, tooltipClasses, Fade} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {IconCustom} from 'utils/IconSVG';
import {type IDrawerItemDetail, type IDrawerItem} from 'interface/Interface';

const BlackTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip
    {...props}
    placement="right"
    arrow
    classes={{popper: className}}
    TransitionComponent={Fade}
    TransitionProps={{timeout: 7000}}
  />
))(({theme}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 12
  }
}));

function Item({props, open}: IDrawerItem): JSX.Element {
  const navigate = useNavigate();
  const {id, name, toolTipText, icon, path}: IDrawerItemDetail = props;
  const onClick = (): void => {
    navigate(path);
  };

  return (
    <>
      {!open ? (
        <React.Fragment>
          <BlackTooltip title={toolTipText}>
            <ListItem key={id} onClick={onClick}>
              {icon.length > 0 && <ListItemIcon> {IconCustom(icon)} </ListItemIcon>}
              <ListItemText primary={name} />
            </ListItem>
          </BlackTooltip>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ListItem key={id} onClick={onClick}>
            {icon.length > 0 && <ListItemIcon> {IconCustom(icon)} </ListItemIcon>}
            <ListItemText primary={name} />
          </ListItem>
        </React.Fragment>
      )}
    </>
  );
}

export default Item;
