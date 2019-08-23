import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';
import NavBar from '../../components/UI/NavBar';
import axios from '../../axios-garden';

class GardenPlanner extends Component {
    state = {
        bedCt: 0,
        bedLayouts: null,
        currId: null,
    }

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                this.setState({bedCt: response.data.bedCt, currId: response.data.currId,
                bedLayouts: response.data.beds});
            });
    }

    addBedHandler = () => {
        let newBedCt = this.state.bedCt;
        newBedCt++;
        let newCurrId = this.state.currId;
        newCurrId++;
        this.setState({bedCt: newBedCt, currId: newCurrId});
        const update = {
            plants: {
                r0c0: 'none',
                r0c1: 0,
                r0c2: 0,
                r0c3: 0,
                r1c0: 0,
                r1c1: 0,
                r1c2: 0,
                r1c3: 0,
                r2c0: 0,
                r2c1: 0,
                r2c2: 0,
                r2c3: 0,
                r3c0: 0,
                r3c1: 0,
                r3c2: 0,
                r3c3: 0
            },
            numRows: 1,
            numCols: 1,
            maxRows: false,
            maxCols: false,
            minRows: true,
            minCols: true
        };
        if (this.state.currId != null) {
            const postUrl = '/beds/' + newCurrId + '.json';
            axios.put(postUrl, update);
                // .then(response => {
                //     console.log('received');
                // });
            axios.put('/currId.json', newCurrId);
                // .then(response => {
                //     console.log('received');
                // });
            axios.put('/bedCt.json', newBedCt)
                .then(response => {
                    axios.get('/.json')
                    .then(response => {
                        this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds});
                    });
                });
        }
    }

    remBedHandler = (id) => {
        // console.log(id);
        // axios.delete('/beds/' + id + '.json');
        // let newBedCt = this.state.bedCt;
        // newBedCt--;
        // let newCurrId = this.state.currId;
        // newCurrId--;
        // if (newBedCt === 0) {
        //     var update = {
        //         bedCt: newBedCt,
        //         currId: newCurrId,
        //         beds: 0
        //     }
        //     axios.put('/.json', update)
        //         .then(response => {
        //             axios.get('/.json')
        //             .then(response => {
        //                 this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds, currId: response.data.currId});
        //             });
        //     });
        // }
        // else {
        //     axios.put('/bedCt.json', "\"" + newBedCt + "\"");
        //     axios.put('/currId.json', "\"" + newCurrId + "\"")
        //         .then(response => {
        //             axios.get('/.json')
        //             .then(response => {
        //                 this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds, currId: response.data.currId});
        //             });
        //         });
        // }
        axios.get('/.json')
            .then(response => {
                // this.setState({bedCt: response.data.bedCt, currId: response.data.currId,
                // bedLayouts: response.data.beds});
                let updBedLayouts = response.data.beds;
                updBedLayouts.splice(id, 1);
                let newBedCt = this.state.bedCt;
                newBedCt--;
                let newCurrId = this.state.currId;
                newCurrId--;
                const update = {
                    bedCt: newBedCt,
                    beds: updBedLayouts,
                    currId: newCurrId,
                }
                axios.put('/.json', update)
                    .then(response => {
                        axios.get('/.json')
                            .then(response => {
                                console.log(response.data.beds);
                                this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds, currId: response.data.currId});
                            });        
                    });
            });
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div style={{display: "flex", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
                    <GardenControls 
                        added={this.addBedHandler}/>
                </div>
                <Garden beds={this.state.bedLayouts} bedCt={this.state.bedCt} removed={this.remBedHandler}/>
            </React.Fragment>
        ); 
    }
}

export default GardenPlanner;