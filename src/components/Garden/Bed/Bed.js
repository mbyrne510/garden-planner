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
        let bedMatrix = [];
        const plantVals = Object.values(this.props.bedLayout.plants);
        for (let i = 0; i < 4; i++) {
            bedMatrix[i] = [];
            for (let j = 0; j < 4; j++) {
                bedMatrix[i][j] = plantVals[j+4*i];
            }
        }

        for (let i = 0; i < 4; i++) {
            bedMatrix[i] = bedMatrix[i].filter(plant => plant !== 0);
        }

        bedMatrix = bedMatrix.filter(row => row.length !== 0);

        for (let i = 0; i < bedMatrix.length; i++) {
            bedMatrix[i] = bedMatrix[i].map((plant, j) => {
                return <BedCol key={j} updatePlant={this.updatePlantsHandler} origPlant={plant}/>
            });
        }

        // const cols = bedMatrix.map(row => row.map(col => ))

        // const rows1 = bedMatrix.map((col, i) => {
        //     return <BedRow key={i} cols={col} />
        // });

        // console.log(rows1);
        
        // const cols = [...Array(this.props.bedLayout.numCols)].map((col, i) => {
        //     return <BedCol key={i} updatePlant={this.updatePlantsHandler}/>
        // });

        const rows = bedMatrix.map((plants, i) => {
            return <BedRow key={i} cols={plants}/>
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