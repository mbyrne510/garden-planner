import React from 'react';
import Button from '@material-ui/core/Button';

const gardenControls = (props) => {
    return (
        <React.Fragment>
            <Button variant="contained" color="primary" onClick={props.added}>
                Add garden bed
            </Button>
        </React.Fragment>
    )
}

export default gardenControls;