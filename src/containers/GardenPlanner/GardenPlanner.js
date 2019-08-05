import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';
import axios from '../../axios-garden';

class GardenPlanner extends Component {
    state = {
        beds: 0,
        bedLayouts: {
            plants: {
                artichoke: 0,
                blueberry: 0,
                broccoli: 0,
                carrots: 0,
                lettuce: 0,
                onions: 0,
                peas: 0,
                potatoes: 0,
                strawberries: 0,
                tomatoes: 0,
                watermelon: 0        
            }
        }
    }

    componentDidMount() {
        axios.get('/beds.json')
            .then(response => {
                this.setState({bedLayouts: response.data});
                console.log(response.data);
            });
    }

    addBedHandler = () => {
        let bedCt = this.state.beds;
        bedCt++;
        this.setState({beds: bedCt});
        const newBed = {
            plants: {
                artichoke: 0,
                blueberry: 0,
                broccoli: 0,
                carrots: 0,
                lettuce: 0,
                onions: 0,
                peas: 0,
                potatoes: 0,
                strawberries: 0,
                tomatoes: 0,
                watermelon: 0        
            }
        };
        axios.post('/beds.json', newBed)
            .then(response => {
                // console.log('data posted');
            });
        axios.put('/bedCt.json', bedCt)
            .then(response => {
                // console.log('data updated');
            });
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