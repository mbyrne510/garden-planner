import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';
import axios from '../../axios-garden';

class GardenPlanner extends Component {
    state = {
        bedCt: 0,
        bedLayouts: null,
    }

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                this.setState({bedCt: response.data.bedCt, bedLayouts: response.data.beds});
            });
    }

    addBedHandler = () => {
        let newBedCt = this.state.bedCt;
        newBedCt++;
        this.setState({bedCt: newBedCt});
        const newBed = Array.from(Array(4), () => new Array(4));
        const update = {
            plants: {
                r1c1: 0,
                r1c2: 0,
                r1c3: 0,
                r1c4: 0,
                r2c1: 0,
                r2c2: 0,
                r2c3: 0,
                r2c4: 0,
                r3c1: 0,
                r3c2: 0,
                r3c3: 0,
                r3c4: 0,
                r4c1: 0,
                r4c2: 0,
                r4c3: 0,
                r4c4: 0
            }
        };
        console.log(update);
        axios.post('/beds.json', update)
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
        )
    }
}

export default GardenPlanner;