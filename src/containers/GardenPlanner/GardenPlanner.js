import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';

class GardenPlanner extends Component {
    state = {
        beds: 0
    }

    addBedHandler = () => {
        let bedCt = this.state.beds;
        bedCt++;
        this.setState({beds: bedCt});
    }

    remBedHandler = () => {
        let bedCt = this.state.beds;
        bedCt--;
        this.setState({beds: bedCt});
    }

    render() {
        return (
            <div>
                <GardenControls 
                    added={this.addBedHandler}
                    removed={this.remBedHandler} />
                <Garden beds={this.state.beds} />
            </div>
        )
    }
}

export default GardenPlanner;