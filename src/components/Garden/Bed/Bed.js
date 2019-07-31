import React, { Component } from 'react';
import { Grid, Paper, Button, Container } from '@material-ui/core';
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
        },
        maxRows: false,
        maxCols: false,
        minRows: false,
        minCols: false
    }

    addRowHandler = () => {
        let newRows = this.state.numRows;
        newRows++;
        this.setState({numRows: newRows});
        if (this.state.numRows >= 7) {
            this.setState({maxRows: true});
        }
        else {
            this.setState({maxRows: false});
        }    
    }

    addColHandler = () => {
        let newCols = this.state.numCols;
        newCols++;
        this.setState({numCols: newCols});
        if (this.state.numCols >= 7) {
            this.setState({maxCols: true});
        }
        else {
            this.setState({maxCols: false});
        }    
    }

    remRowHandler = () => {
        let newRows = this.state.numRows;
        newRows--;
        this.setState({numRows: newRows});
        if (this.state.numRows <= 1) {
            this.setState({minRows: true});
        }
        else {
            this.setState({minRows: false});
        }    
    }

    remColHandler = () => {
        let newCols = this.state.numCols;
        newCols--;
        this.setState({numCols: newCols});
        if (this.state.numCols <= 1) {
            this.setState({minCols: true});
        }
        else {
            this.setState({minCols: false});
        }    
    }

    addPlantHandler = (type) => {
        const oldPlants = {...this.state.plants};
        const newPlants = oldPlants;
        newPlants[type] = oldPlants[type]++;
        this.setState({plants: newPlants});
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
                        <Container>
                            {rows}
                        </Container>
                        <Button onClick={this.addRowHandler} disabled={this.state.maxRows}>Add row</Button>
                        <Button onClick={this.addColHandler} disabled={this.state.maxCols}>Add column</Button>
                        <br></br>
                        <Button onClick={this.remRowHandler} disabled={this.state.minRows}>Remove row</Button>
                        <Button onClick={this.remColHandler} disabled={this.state.minCols}>Remove column</Button>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Bed;