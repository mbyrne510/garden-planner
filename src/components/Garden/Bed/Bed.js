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
        let updPlants = {...this.state.plants};

        const plantArr = Object.keys(updPlants);
        for (let i = 0; i < this.state.numCols; i++) {
            let key = plantArr[4*this.state.numRows+i];
            updPlants[key] = "none";
        }

        if (newRows >= 4) {
            this.setState({numRows: newRows, maxRows: true, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/maxRows.json', "\"" + true + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numRows: newRows, minRows: false, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/minRows.json', "\"" + false + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }

        axios.put('/beds/' + this.props.bedNum + '/numRows.json', "\"" + newRows + "\"")
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
        axios.put('/beds/' + this.props.bedNum + '/plants.json', updPlants)
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
    }

    addColHandler = () => {
        let newCols = this.state.numCols;
        newCols++;
        let updPlants = {...this.state.plants};

        const plantArr = Object.keys(updPlants);
        for (let i = this.state.numCols; i < (this.state.numRows * 4); i+=4) {
            let key = plantArr[i];
            updPlants[key] = "none";
        }
        
        if (newCols >= 4) {
            this.setState({numCols: newCols, maxCols: true, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/maxCols.json', "\"" + true + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numCols: newCols, minCols: false, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/minCols.json', "\"" + false + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }

        axios.put('/beds/' + this.props.bedNum + '/numCols.json', "\"" + newCols + "\"")
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });

        axios.put('/beds/' + this.props.bedNum + '/plants.json', updPlants)
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
    }

    remRowHandler = () => {
        let newRows = this.state.numRows;
        newRows--;
        let updPlants = {...this.state.plants};

        const plantArr = Object.keys(updPlants);
        for (let i = 0; i < this.state.numCols; i++) {
            console.log(this.state.numRows);
            let key = plantArr[4*(this.state.numRows-1)+i];
            console.log(key);
            updPlants[key] = 0;
        }

        if (this.state.numRows <= 2) {
            this.setState({numRows: newRows, minRows: true, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/minRows.json', "\"" + true + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numRows: newRows, maxRows: false, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/maxRows.json', "\"" + false + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }

        axios.put('/beds/' + this.props.bedNum + '/numRows.json', "\"" + newRows + "\"")
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
        axios.put('/beds/' + this.props.bedNum + '/plants.json', updPlants)
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
    }

    remColHandler = () => {
        let newCols = this.state.numCols;
        newCols--;
        let updPlants = {...this.state.plants};

        const plantArr = Object.keys(updPlants);
        for (let i = this.state.numCols; i <= (this.state.numRows * 4); i+=4) {
            let key = plantArr[i-1];
            updPlants[key] = 0;
        }
        
        if (this.state.numCols <= 2) {
            this.setState({numCols: newCols, minCols: true, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/minCols.json', "\"" + true + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.setState({numCols: newCols, maxCols: false, plants: updPlants});
            axios.put('/beds/' + this.props.bedNum + '/maxCols.json', "\"" + false + "\"")
                .then(response => {
                    console.log('received');
                })
                .catch(error => {
                    console.log(error);
                });
        }

        axios.put('/beds/' + this.props.bedNum + '/numCols.json', "\"" + newCols + "\"")
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });

        axios.put('/beds/' + this.props.bedNum + '/plants.json', updPlants)
            .then(response => {
                console.log('received');
            })
            .catch(error => {
                console.log(error);
            });
    }

    updatePlantsHandler = (cell, newType) => {
        let updPlants = {...this.state.plants};
        updPlants[cell] = newType;
        this.setState({plants: updPlants});
    }

    render() {
        let bedMatrix = [];
        const plantVals = Object.values(this.state.plants);
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