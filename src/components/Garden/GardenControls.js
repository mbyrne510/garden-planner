import React from 'react';
import Button from '@material-ui/core/Button';

const gardenControls = (props) => {
    return (
        <React.Fragment>
            <Button variant="contained" style={{backgroundColor: "#48ab5b", color: "white", fontSize: "16px"}} onClick={props.added}>
                Add garden bed
            </Button>
        </React.Fragment>
    )
}

export default gardenControls;