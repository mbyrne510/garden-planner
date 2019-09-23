import React, { Component } from 'react';
import Garden from '../../components/Garden/Garden';
import GardenControls from '../../components/Garden/GardenControls';
import NavBar from '../../components/UI/NavBar';
import axios from 'axios';

class GardenPlanner extends Component {
    state = {
        bedCt: 0,
        bedLayouts: null,
    }

    componentDidMount() {
        axios.get('http://localhost:4000/beds')
            .then(response => {
                this.setState({bedLayouts: response.data.beds});
            });
        axios.get('http://localhost:4000/bedCt')
            .then(response => {
                this.setState({bedCt: response.data.bedCt});
            });
    }

    addBedHandler = () => {
        let newBedCt = this.state.bedCt;
        newBedCt++;
        this.setState({bedCt: newBedCt});
        const bedsUpdate = {
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
        const bedCtUpdate = {
            bedCt: newBedCt
        };
        axios.post('http://localhost:4000/beds', bedsUpdate)
            .then(response => {
                this.setState({bedLayouts: response.data.beds});
            })
        axios.put('http://localhost:4000/bedCt', bedCtUpdate)
            .then(response => {
                this.setState({bedCt: response.data.bedCt})
            });
    }

    remBedHandler = (id) => {
        axios.delete('http://localhost:4000/beds' + id)
            .then(response => {
                axios.get('http://localhost:4000/beds')
                    .then(response => {
                        this.setState({bedLayouts: response.data.beds});
                    })
                let newBedCt = this.state.bedCt;
                newBedCt--;
                const bedCtUpdate = {
                    bedCt: newBedCt,
                }
                axios.put('http://localhost:4000/bedCt', bedCtUpdate)
                    .then(response => {
                        this.setState({bedCt: response.data.bedCt});
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
                {/* <Garden beds={this.state.bedLayouts} bedCt={this.state.bedCt} removed={this.remBedHandler}/> */}
                <div style={{textAlign: "center", color: "grey", marginTop: 100}}>Icons made by&nbsp;
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                </div>
            </React.Fragment>
        ); 
    }
}

export default GardenPlanner;