import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import classes from './Bed.module.css';

const bedCol = (props) => {
    return (
        <Grid item>
            <Card elevation={2}
                className={classes.Space}>
                    <Typography variant="h6" align="center"
                        style={{textAlign: "center", margin: 5}}>
                        Plant something!
                    </Typography>
            </Card>
        </Grid>
    )
}

export default bedCol;