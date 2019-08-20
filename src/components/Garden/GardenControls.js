import React from 'react';
import Button from '@material-ui/core/Button';

const gardenControls = (props) => {
    return (
        <React.Fragment>
            <Button variant="contained" style={{backgroundColor: "#1ab039", color: "white", fontSize: "15px"}} onClick={props.added}>
                Add garden bed
            </Button>
        </React.Fragment>
    )
}

export default gardenControls;