import React, { Component } from 'react';
import { Grid, Paper, Button, Container } from '@material-ui/core';
import BedCol from './BedCol';
import BedRow from './BedRow';
import axios from '../../../axios-garden';

class Bed extends Component {
    state = {
        numRows: 1,
        numCols: 1,
        // plants: {
        //     artichoke: 0,
        //     blueberry: 0,
        //     broccoli: 0,
        //     carrots: 0,
        //     lettuce: 0,
        //     onions: 0,
        //     peas: 0,
        //     potatoes: 0,
        //     strawberries: 0,
        //     tomatoes: 0,
        //     watermelon: 0    
        // },
        plants: null,
        maxRows: false,
        maxCols: false,
        minRows: true,
        minCols: true,
        error: false
    }

    // componentDidMount() {
    //     axios.get('https://garden-planner-baff9.firebaseio.com/plants.json')
    //         .then(response => {
    //             this.setState({plants: response.data});
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //                 this.setState({error: true});
    //         });
    // }

    addRowHandler = () => {
        let newRows = this.state.numRows;
        newRows++;
        this.setState({numRows: newRows});
        if (this.state.numRows >= 3) {
            this.setState({maxRows: true});
        }
        else {
            this.setState({minRows: false});
        }
        // console.log(this.state.plants);
    }

    addColHandler = () => {
        let newCols = this.state.numCols;
        newCols++;
        this.setState({numCols: newCols});
        if (this.state.numCols >= 3) {
            this.setState({maxCols: true});
        }
        else {
            this.setState({minCols: false});
        }    
    }

    remRowHandler = () => {
        let newRows = this.state.numRows;
        newRows--;
        this.setState({numRows: newRows});
        if (this.state.numRows <= 2) {
            this.setState({minRows: true});
        }
        else {
            this.setState({maxRows: false});
        }    
    }

    remColHandler = () => {
        let newCols = this.state.numCols;
        newCols--;
        this.setState({numCols: newCols});
        if (this.state.numCols <= 2) {
            this.setState({minCols: true});
        }
        else {
            this.setState({maxCols: false});
        }    
    }

    updatePlantsHandler = (oldType, newType) => {
        let oldPlants = {...this.state.plants};
        oldPlants[oldType]--;
        oldPlants[newType]++;
        let newPlants = oldPlants;
        this.setState({plants: newPlants});
        const changes = newPlants;

        axios.put('/plants.json', changes)
            .then(response => {
                // console.log('data transmitted');
            });
        // .catch(error => this.setState({loading: false, purchasing: false}));
    }

    render() {
        const cols = [...Array(this.state.numCols)].map((col, i) => {
            return <BedCol key={i} updatePlant={this.updatePlantsHandler}/>
        });

        const rows = [...Array(this.state.numRows)].map((col, i) => {
            return <BedRow key={i} cols={cols}/>
        });

        return (
            <React.Fragment>
                <Grid item xs={9} lg={3}>
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