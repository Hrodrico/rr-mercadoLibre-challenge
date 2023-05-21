/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Tooltip,
  type TooltipProps,
  tooltipClasses,
  Fade
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {IconCustom} from 'utils/IconSVG';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {type IDrawerItemCollapse} from 'interface/Interface';

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

function ItemCollapse({props, open}: IDrawerItemCollapse): JSX.Element {
  const navigate = useNavigate();
  const {id, name, toolTipText, icon, menuSub} = props;
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClick = (): void => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <React.Fragment>
      {!open ? (
        <React.Fragment>
          <BlackTooltip title={toolTipText}>
            <ListItem key={id} onClick={handleClick}>
              {icon !== '' && <ListItemIcon> {IconCustom(icon)} </ListItemIcon>}
              <ListItemText primary={name} />
              {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
          </BlackTooltip>
          {menuSub?.map((elem: any, idx: number) => {
            const {ids, name, toolTipText, icon, path} = elem;
            const onClick = (): void => {
              navigate(path);
            };
            return (
              <>
                <BlackTooltip title={toolTipText}>
                  <Collapse key={elem} in={openCollapse} timeout="auto" unmountOnExit orientation="horizontal">
                    <List key={ids} component="div" disablePadding>
                      <ListItem key={ids} sx={{pl: 3}} onClick={onClick}>
                        <ListItemIcon> {IconCustom(icon)} </ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItem>
                    </List>
                  </Collapse>
                </BlackTooltip>
              </>
            );
          })}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ListItem key={id} onClick={handleClick}>
            {icon !== '' && <ListItemIcon> {IconCustom(icon)} </ListItemIcon>}
            <ListItemText primary={name} />
            {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          {menuSub?.map((elem: any) => {
            const {ids, name, icon, path} = elem;
            const onClick = (): void => {
              navigate(path);
            };
            return (
              <React.Fragment>
                <Collapse key={elem} in={openCollapse} timeout="auto" unmountOnExit orientation="horizontal">
                  <List key={ids} component="div" disablePadding>
                    <ListItem key={ids} sx={{pl: 3}} onClick={onClick}>
                      <ListItemIcon> {IconCustom(icon)} </ListItemIcon>
                      <ListItemText primary={name} />
                    </ListItem>
                  </List>
                </Collapse>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ItemCollapse;
