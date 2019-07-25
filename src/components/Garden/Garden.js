import React from 'react';
import Bed from './Bed/Bed';
import Grid from '@material-ui/core/Grid';
//import GardenControls from './GardenControls';

const garden = (props) => {
    const beds = [...Array(props.beds)].map((bed, i) => {
        return <Bed key={i}/>
    });
    return (
        <React.Fragment>
            <Grid container spacing={5} direction="row" alignItems="center" justify="center">
                {beds}
            </Grid>
        </React.Fragment>
    )
}

export default garden;