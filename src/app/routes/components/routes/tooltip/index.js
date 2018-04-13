import React from 'react';
import ControlledTooltips from './controlled/ControlledTooltips';
import PositionedTooltips from './positional/PositionedTooltips';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/Avatar';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

const Tooltips = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Tooltips" match={match}/>

            <div className="row">
                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center" childrenStyle="d-flex justify-content-center" heading="Avatar Tooltip">
                    <Tooltip id="tooltip-icon" title="Hello" placement="bottom">
                        <Avatar className="size-60" alt="Remy Sharp" src="http://via.placeholder.com/256x256" />
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center" childrenStyle="d-flex justify-content-center" heading="Button Tooltip">
                    <Tooltip id="tooltip-fab" title="Plus" placement="bottom">
                        <Button fab color="primary">
                            <i className="zmdi zmdi-plus zmdi-hc-lg"/>
                        </Button>
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center" childrenStyle="d-flex justify-content-center" heading="Icon Tooltip">
                    <Tooltip id="tooltip-icon" title="Add User" placement="bottom">
                        <IconButton>
                            <i className="zmdi zmdi-account-add"/>
                        </IconButton>
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center" childrenStyle="d-flex justify-content-center" heading="Controlled Tooltip">
                    <ControlledTooltips/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-12" heading="Positioned Tooltip">
                    <PositionedTooltips/>
                </CardBox>
            </div>
        </div>
    );
};

export default  Tooltips;