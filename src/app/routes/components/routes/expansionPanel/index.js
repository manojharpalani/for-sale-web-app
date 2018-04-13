import React from 'react';
import SimpleExpansionPanel from './simple';
import DetailedExpansionPanel from './detailed';
import ControlledExpansionPanels from './controlled';


import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

const ExpansionPanel = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Expansion Panel" match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0" heading="Simple Expansion Panel" headerOutside>
                    <SimpleExpansionPanel/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0" heading="Controlled Accordion" headerOutside>
                    <ControlledExpansionPanels/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0" heading="Secondary heading and Columns" headerOutside>
                    <DetailedExpansionPanel/>
                </CardBox>
            </div>
        </div>
    );
};

export default ExpansionPanel;

