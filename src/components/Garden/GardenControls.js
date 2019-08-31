import React from 'react';
import Button from '@material-ui/core/Button';

const gardenControls = (props) => {
    return (
        <React.Fragment>
            <Button variant="contained" style={{backgroundColor: "#106922", color: "white", fontSize: "16px"}} onClick={props.added}>
                Add bed
            </Button>
        </React.Fragment>
    )
}

export default gardenControls;