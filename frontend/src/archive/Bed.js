import React, { Component } from 'react';
import { Grid, Paper, Card, Typography } from '@material-ui/core';
import classes from './Bed.module.css';

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
            <Grid item xs={10} lg={4}
                style={{height: 600}}>
                <Paper elevation={5}
                    style={{width: "100%", height: "100%"}}>
                    <Grid container justify="space-evenly" alignItems="center"
                        style={{width: "100%", height:"100%"}}>
                        <Grid item
                            style={{width: "40%", height:"25%", marginTop: "3%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                        <Grid item
                            style={{width: "40%", height:"25%", marginTop: "3%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                        <Grid item
                            style={{width: "40%", height:"25%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                        <Grid item
                            style={{width: "40%", height:"25%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                        <Grid item
                            style={{width: "40%", height:"25%", marginBottom: "3%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                        <Grid item
                            style={{width: "40%", height:"25%", marginBottom: "3%"}}>
                            <Card elevation={1}
                                className={classes.Space}>
                                    <Typography variant="h5" align="center"
                                        style={{textAlign: "center", paddingTop: 50}}>
                                        Plant something!
                                    </Typography>
                                </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default Bed;