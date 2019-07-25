import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

class Bed extends Component {
    state = {
        plants: {
            artichoke: 0,
            basil: 0,
            carrots: 0,
            eggplant: 0,
            garlic: 0,
            onions: 0,
            peas: 0,
            potatoes: 0,
            spinach: 0,
            tomatoes: 0    
        }
    }

    addPlant = (type) => {
        const oldPlants = {...this.state.plants}
        const newPlants = oldPlants
        newPlants[type] = oldPlants[type]++
        this.setState({plants: newPlants})
    }

    render() {
        return (
            <Grid item sm={2}>
                <Paper elevation={4}>
                    <Grid container direction="row" alignItems="center" justify="space-evenly">
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                        <Chip label="Hello World" style={{margin: "10px"}}/>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default Bed;