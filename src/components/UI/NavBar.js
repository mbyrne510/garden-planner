// https://stackoverflow.com/questions/39138380/how-to-apply-different-color-in-appbar-title-material-ui

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function NavBar() {
    return (
        <div>
            <AppBar position="static" style={{background: "#106922"}}>
                <Toolbar>
                    <Typography variant="h4">
                        Garden Planner
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}