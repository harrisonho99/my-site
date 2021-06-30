import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

interface ShapeButton {
  title: string;
  onClick: (title: any) => any;
  key: string;
}

interface Props {
  title: string;
  listButton: ShapeButton[];
}

export default function ListPopUpButton({ title, listButton }: Props) {
  return (
    <PopupState variant='popover' popupId={title + '-popup-menu'}>
      {(popupState) => (
        <React.Fragment>
          <Button size='small' variant='contained' color='primary' {...bindTrigger(popupState)}>
            {title}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {listButton.map((item) => (
              <MenuItem
                key={item.key}
                onClick={() => {
                  popupState.close();
                  item.onClick(item.title);
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export type { ShapeButton };
