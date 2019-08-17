import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';
import axios from '../../axios-garden';

class GardenPlanner extends Component {
    state = {
        bedCt: 0,
        bedLayouts: null,
        currId: null,
        // maxRows: false,
        // maxCols: false,
        // minRows: true,
        // minCols: true
    }

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                console.log(response.data.bedCt, response.data.currId, response.data.beds);
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
            bedId: newCurrId,
            numRows: 1,
            numCols: 1,
            maxRows: false,
            maxCols: false,
            minRows: true,
            minCols: true
        };
        console.log(newCurrId);
        if (this.state.currId != null) {
            const postUrl = '/beds/' + newCurrId + '.json';
            axios.put(postUrl, update)
                .then(response => {
                    console.log('received');
                });
            axios.put('/currId.json', newCurrId)
                .then(response => {
                    console.log('received');
                });
            axios.put('/bedCt.json', newBedCt)
                .then(response => {
                    axios.get('/.json')
                    .then(response => {
                        this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds});
                    });
                });
        }
    }

    remBedHandler = () => {
        let newBedCt = this.state.bedCt;
        newBedCt--;
        this.setState({beds: newBedCt});
    }

    render() {
        return (
            <div>
                <GardenControls 
                    added={this.addBedHandler}
                    removed={this.remBedHandler} />
                <Garden beds={this.state.bedLayouts} bedCt={this.state.bedCt} />
            </div>
        ); 
    }
}

export default GardenPlanner;