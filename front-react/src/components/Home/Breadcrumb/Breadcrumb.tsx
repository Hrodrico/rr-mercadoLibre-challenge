import React from 'react';
import {emphasize, styled} from '@mui/material/styles';
import {Breadcrumbs, Chip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {IconCustom} from 'utils/IconSVG'; // Mui-Icon
import {getPathNameStorage} from 'utils/LocalStorage'; // Uils
import {PathConfig} from 'config'; // Path Config
import dataBreadcrumb from 'mocks/breadcrumb.json'; // Mocks

function CustomizedBreadcrumbs(): JSX.Element {
  const navigate = useNavigate();
  const storagePathName: string | null = getPathNameStorage();
  const homePath = PathConfig.patHome;

  const StyledBreadcrumb = styled(Chip)(({theme}) => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12)
      }
    };
  }) as typeof Chip;

  function handleClicHome(event: React.MouseEvent<Element, MouseEvent>): void {
    event.preventDefault();
    navigate('/');
  }

  function crumLevelOne(arrMain: any, arrSecon: any, idx: number): JSX.Element {
    return (
      <Breadcrumbs key={idx} aria-label="breadcrumb">
        <StyledBreadcrumb label={arrMain[0].breadcrumbMain} icon={IconCustom(arrMain[0].iconMain)} onClick={handleClicHome} />
        <StyledBreadcrumb label={arrSecon.breadcrumbMain} icon={IconCustom(arrSecon.iconMain)} />
      </Breadcrumbs>
    );
  }

  function crumLevelTwo(arrMain: any, arrSecon: any, arrTerti: any, idx: number): JSX.Element {
    return (
      <Breadcrumbs key={idx} aria-label="breadcrumb" maxItems={2}>
        <StyledBreadcrumb label={arrMain[0].breadcrumbMain} icon={IconCustom(arrMain[0].iconMain)} onClick={handleClicHome} />
        <StyledBreadcrumb label={arrSecon.breadcrumbMain} icon={IconCustom(arrSecon.iconMain)} />
        {arrTerti.length > 0 && <StyledBreadcrumb label={arrTerti.breadcrumb} icon={IconCustom(arrTerti.iconSub)} />}
      </Breadcrumbs>
    );
  }

  return (
    <>
      {storagePathName !== homePath &&
        dataBreadcrumb.length > 0 &&
        dataBreadcrumb.map((elem: any, idx: number) =>
          elem.breadcrumbSub.length === 0
            ? elem.navigate === storagePathName && crumLevelOne(dataBreadcrumb, elem, idx)
            : elem.breadcrumbSub.map(
                (item: any) => item.navigate === storagePathName && crumLevelTwo(dataBreadcrumb, elem, item, idx)
              )
        )}
    </>
  );
}
export default CustomizedBreadcrumbs;
