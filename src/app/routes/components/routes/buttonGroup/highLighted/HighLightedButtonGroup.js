import React from 'react';
import {ButtonGroup} from 'reactstrap';
import Button from 'material-ui/Button';

const HighLightedButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn text-muted bg-grey lighten-2">Left</Button>{' '}
            <Button className="jr-btn bg-primary text-white">Middle</Button>{' '}
            <Button className="jr-btn text-muted bg-grey lighten-2">Right</Button>
        </ButtonGroup>
    );
};

export default HighLightedButtonGroup;