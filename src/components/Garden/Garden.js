import React from 'react';
import Bed from './Bed/Bed';
import Grid from '@material-ui/core/Grid';
//import GardenControls from './GardenControls';

const garden = (props) => {
    if (props.bedCt > 0) {
        const beds = Object.keys(props.beds).map((bed, i) => {
            return <Bed bedLayout={props.beds[bed]} key={i} bedNum={i}/>
        });
        return (
            <React.Fragment>
                <Grid 
                    container
                    spacing={2}
                    justify="center">
                    {beds}
                </Grid>
            </React.Fragment>
        );
    }
    else {
        return null;
    }
}

export default garden;