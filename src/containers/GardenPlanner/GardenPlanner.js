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
        minBeds: null
    }

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                this.setState({bedCt: response.data.bedCt, currId: response.data.currId,
                bedLayouts: response.data.beds, minBeds: response.data.minBeds});
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
            axios.put('/currId.json', newCurrId);
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
        axios.get('/.json')
            .then(response => {
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
                <div style={{textAlign: "center", color: "grey", marginTop: 100}}>Icons made by&nbsp;
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                </div>
            </React.Fragment>
        ); 
    }
}

export default GardenPlanner;