import React from 'react';
import { Grid } from '@material-ui/core';

const bedRow = (props) => {
    return (
        <Grid container justify="center" style={{padding: 10}}>
            {props.cols}
        </Grid>
    )
}

export default bedRow;