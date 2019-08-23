import React, { useEffect } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import PlantMenu from '../Plant/PlantMenu';
import PlantIcon from '../Plant/PlantIcon';
import classes from './Bed.module.css';
import axios from '../../../axios-garden';

export default function BedCol(props) {
    const [plantType, setPlantType] = React.useState(null);

    useEffect(
        () => {
            setPlantType(props.origPlant);
        }, [props.origPlant]
    )
    
    function updatePlantHandler(newType) {
        // const oldType = plantType;
        props.updatePlant(props.cellId, newType);
        setPlantType(newType);

        axios.put('/beds/' + props.bedId + '/plants/' + props.cellId + '.json', "\"" + newType + "\"");
            // .then(response => {
            //     console.log('received');
            // })
            // .catch(error => {
            //     console.log(error);
            // });
    }

    if (plantType) {
        var fill = (
            <Grid item xs={3} lg={3}>
                <Card elevation={2}
                    className={classes.Space}>
                        <div style={{padding: 14}}>
                            <PlantIcon plantChoice={plantType}/>
                        </div>
                        <PlantMenu updatePlant={updatePlantHandler} style={{align: "right"}}/>
                </Card>
            </Grid>
        )
    }
    else {
        fill = (
            <Grid item xs={3} lg={3}>
                <Card elevation={2}
                    className={classes.Space}>
                        <Typography variant="h6" align="center"
                            style={{textAlign: "center"}}>
                            Choose plant:
                        </Typography>
                        <PlantMenu updatePlant={updatePlantHandler} style={{align: "right"}}/>
                </Card>
            </Grid>
        )
    }

    return (
        fill
    );
}