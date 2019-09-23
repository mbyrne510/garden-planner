import React, { Component } from 'react';
import { Grid, Paper, Button, Container } from '@material-ui/core';
import BedCol from './BedCol';
import BedRow from './BedRow';
import axios from '../../../axios-garden';

class Bed extends Component {
    state = {
        numRows: Number(this.props.bedLayout.numRows),
        numCols: Number(this.props.bedLayout.numCols),
        plants: this.props.bedLayout.plants,
        maxRows: JSON.parse(this.props.bedLayout.maxRows),
        maxCols: JSON.parse(this.props.bedLayout.maxCols),
        minRows: JSON.parse(this.props.bedLayout.minRows),
        minCols: JSON.parse(this.props.bedLayout.minCols)
    }

    addRowHandler = () => {
        let newRows = this.state.numRows;
        newRows++;

        let plantsUpdate = this.props.bedLayout.plants;
        const plantArr = Object.keys(plantsUpdate);

        for (let i = 0; i < this.state.numCols; i++) {
            let key = plantArr[4*this.state.numRows+i];
            plantsUpdate[key] = "none";
        }

        if (newRows >= 4) {
            this.setState({numRows: newRows, maxRows: true, plants: plantsUpdate});
            const maxRowsUpdate = {maxRows: true};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, maxRowsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numRows: newRows, minRows: false, plants: plantsUpdate});
            const minRowsUpdate = {minRows: false};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, minRowsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }

        const numRowsUpdate = {
            numRows: newRows
        };

        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, numRowsUpdate)
            .catch(error => {
                console.log(error);
            });
        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, plantsUpdate)
            .catch(error => {
                console.log(error);
            });
    }

    addColHandler = () => {
        let newCols = this.state.numCols;
        newCols++;

        let plantsUpdate = this.props.bedLayout.plants;
        const plantArr = Object.keys(plantsUpdate);

        for (let i = this.state.numCols; i < (this.state.numRows * 4); i+=4) {
            let key = plantArr[i];
            plantsUpdate[key] = "none";
        }
        
        if (newCols >= 4) {
            this.setState({numCols: newCols, maxCols: true, plants: plantsUpdate});
            const maxColsUpdate = {maxCols: true};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, maxColsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numCols: newCols, minCols: false, plants: plantsUpdate});
            const minColsUpdate = {minCols: false};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, minColsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }

        const numColsUpdate = {
            numCols: newCols
        };

        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, numColsUpdate)
            .catch(error => {
                console.log(error);
            });
        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, plantsUpdate)
            .catch(error => {
                console.log(error);
            });
    }

    remRowHandler = () => {
        let newRows = this.state.numRows;
        newRows--;

        let plantsUpdate = this.props.bedLayout.plants;
        const plantArr = Object.keys(plantsUpdate);

        for (let i = 0; i < this.state.numCols; i++) {
            let key = plantArr[4*(this.state.numRows-1)+i];
            plantsUpdate[key] = 0;
        }

        if (this.state.numRows <= 2) {
            this.setState({numRows: newRows, minRows: true, plants: plantsUpdate});
            const minRowsUpdate = {minRows: true};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, minRowsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numRows: newRows, maxRows: false, plants: plantsUpdate});
            const maxRowsUpdate = {maxRows: false};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, maxRowsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }

        const numRowsUpdate = {
            numRows: newRows
        };

        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, numRowsUpdate)
            .catch(error => {
                console.log(error);
            });
        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, plantsUpdate)
            .catch(error => {
                console.log(error);
            });
    }

    remColHandler = () => {
        let newCols = this.state.numCols;
        newCols--;
        let plantsUpdate = this.props.bedLayout.plants;

        const plantArr = Object.keys(plantsUpdate);
        for (let i = this.state.numCols; i <= (this.state.numRows * 4); i+=4) {
            let key = plantArr[i-1];
            plantsUpdate[key] = 0;
        }
        
        if (this.state.numCols <= 2) {
            this.setState({numCols: newCols, minCols: true, plants: plantsUpdate});
            const minColsUpdate = {minCols: true};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, minColsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numCols: newCols, maxCols: false, plants: plantsUpdate});
            const maxColsUpdate = {maxCols: false};
            axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, maxColsUpdate)
                .catch(error => {
                    console.log(error);
                });
        }

        const numColsUpdate = {
            numCols: newCols
        };

        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, numColsUpdate)
            .catch(error => {
                console.log(error);
            });
        axios.patch('http://localhost:4000/beds/' + this.props.bedLayout._id, plantsUpdate)
            .catch(error => {
                console.log(error);
            });
    }

    updatePlantsHandler = (cell, newType) => {
        let plantsUpdate = this.props.bedLayout.plants;
        plantsUpdate[cell] = newType;
        this.setState({plants: plantsUpdate});
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
                return <BedCol 
                    key={"r" + i + "c" + j}
                    bedId={this.props.bedNum}
                    cellId={"r" + i + "c" + j}
                    updatePlant={this.updatePlantsHandler}
                    origPlant={plant} />
            });
        }

        const rows = bedMatrix.map((plants, i) => {
            return <BedRow key={i} cols={plants}/>
        });

        return (
            <React.Fragment>
                <Grid item xs={11} lg={3}>
                    <Paper elevation={5} style={{textAlign: "center", paddingBottom: 10}}>
                        <Container style={{marginBottom: 20}}>
                            {rows}
                        </Container>
                        <Button
                            onClick={this.addRowHandler}
                            disabled={this.state.maxRows}
                            variant="outlined"
                            style={{fontSize: "11px"}}>Add Height</Button>
                        <Button 
                            onClick={this.addColHandler}
                            disabled={this.state.maxCols}
                            variant="outlined"
                            style={{fontSize: "11px"}}>Add Width</Button>
                        <br></br>
                        <Button 
                            onClick={this.remRowHandler}
                            disabled={this.state.minRows}
                            variant="outlined"
                            style={{fontSize: "11px"}}>Reduce Height</Button>
                        <Button 
                            onClick={this.remColHandler}
                            disabled={this.state.minCols}
                            variant="outlined"
                            style={{fontSize: "11px"}}>Reduce Width</Button>
                        <div>
                            <Button
                                onClick={() => this.props.removeBed(this.props.bedNum)}
                                disabled={this.props.bedCt <= 1}
                                variant="outlined"
                                style={{fontSize: "13px", marginTop: 5}}>
                                Remove Bed</Button>
                        </div>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Bed;