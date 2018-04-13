import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import Checkboxes from './checkboxes/Checkboxes';
import RadioButtonsGroup from './radioButtons/RadioButtonsGroup';
import Switches from './switches/Switches';
import DisabledCheckboxes from "./disabled/DisabledCheckboxes";
import Intermediate from "./intermediate/Intermediate";
import RadioButtonsDisabled from "./radioButtons/RadioButtonsDisabled";
import ErrorMessage from "./message/ErrorMessage";
import SwitchList from "./List/SwitchList";
import FormGroup from "./formGroups/FormGroup";

const Selection = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Selection Controls" match={match}/>

            <div className="row">
                <CardBox styleName="col-md-4 col-lg-4 col-sm-6" childrenStyle="" heading="Checkboxes">
                    <Checkboxes/>
                </CardBox>
                <CardBox styleName="col-md-4 col-lg-4 col-sm-6" childrenStyle="" heading="Disabled">
                    <DisabledCheckboxes/>
                </CardBox>

                <CardBox styleName="col-md-4 col-lg-4 col-12" heading="Intermediate">
                    <Intermediate/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" heading="Checkboxes with Form Group">
                    <div>Menus are positioned over their emitting elements such that the currently selected menu item
                        appears on top of the emitting element.
                    </div>
                    <FormGroup/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6" childrenStyle="" heading="Basic Radio Buttons">
                    <div>Vertical and Inline radio buttons</div>
                    <RadioButtonsGroup/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading="Disabled Radio Buttons">
                    <RadioButtonsDisabled/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading="With Error Message">
                    <ErrorMessage/>
                </CardBox>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="row">
                        <CardBox styleName="col-12" heading="Switches">
                            <div>
                                on/off switches
                            </div>
                            <Switches/>
                        </CardBox>

                        <CardBox styleName="col-12" childrenStyle="" heading="Vertical Switches">
                            <div>Vertical implementation of switches</div>
                            <SwitchList/>
                        </CardBox>
                    </div>
                </div>

                <CardBox heading="Grouped Switches">
                    <div>Vertical implementation of switches</div>
                    <div>
                        <SwitchList title="General Settings"/>
                        <SwitchList title="Theme Settings"/>
                    </div>
                </CardBox>
            </div>
        </div>
    );
};

export default (Selection);

