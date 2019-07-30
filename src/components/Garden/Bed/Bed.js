import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import BedCol from './BedCol';
import BedRow from './BedRow';

class Bed extends Component {
    state = {
        numRows: 1,
        numCols: 1,
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

    addRowHandler = () => {
        let newRows = this.state.numRows;
        newRows++;
        this.setState({numRows: newRows});
    }

    addColHandler = () => {
        let newCols = this.state.numCols;
        newCols++;
        this.setState({numCols: newCols});
    }

    addPlantHandler = (type) => {
        const oldPlants = {...this.state.plants}
        const newPlants = oldPlants
        newPlants[type] = oldPlants[type]++
        this.setState({plants: newPlants})
    }

    render() {
        const cols = [...Array(this.state.numCols)].map((col, i) => {
            return <BedCol key={i}/>
        });

        const rows = [...Array(this.state.numRows)].map((col, i) => {
            return <BedRow key={i} cols={cols}/>
        }); 

        return (
            <React.Fragment>
                <Grid item>
                    <Paper elevation={5} style={{textAlign: "center"}}>
                        {rows}
                        <Button onClick={this.addRowHandler}>Add row</Button>
                        <Button onClick={this.addColHandler}>Add column</Button>
                        <br></br>
                        <Button onClick={this.addColHandler}>Remove row</Button>
                        <Button onClick={this.addColHandler}>Remove column</Button>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Bed;