import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'none',
    'artichoke',
    'blueberry',
    'broccoli',
    'carrots',
    'lettuce',
    'onions',
    'peas',
    'potatoes',
    'strawberries',
    'tomatoes',
    'watermelon'
]

const ITEM_HEIGHT = 48;

export default function PlantMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(type) {
        setAnchorEl(null);
        props.updatePlant(type);
    }

  return (
    <React.Fragment>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
            },
            }}>
                {options.map(option => (
                    <MenuItem key={option} selected={option === 'none'} onClick={() => handleClose(option)}>
                        {option}
                    </MenuItem>
                ))}
        </Menu>
    </React.Fragment>
    );
}