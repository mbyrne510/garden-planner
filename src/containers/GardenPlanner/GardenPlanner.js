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
                r1c1: 'none',
                r1c2: 'none',
                r1c3: 'none',
                r2c2: 'none',
                r2c3: 'none',
                r2c4: 'none',
                r3c1: 'none',
                r3c2: 'none',
                r1c4: 'none',
                r3c3: 'none',
                r2c1: 'none',
                r3c4: 'none',
                r4c1: 'none',
                r4c2: 'none',
                r4c3: 'none',
                r4c4: 'none'
            },
            bedId: newCurrId,
            numRows: 1,
            numCols: 1
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
        if (this.state.bedLayouts) {
            return (
                <div>
                    <GardenControls 
                        added={this.addBedHandler}
                        removed={this.remBedHandler} />
                    <Garden beds={this.state.bedLayouts} bedCt={this.state.bedCt} />
                </div>
            ); 
        }
        else {
            return null;
        }
    }
}

export default GardenPlanner;