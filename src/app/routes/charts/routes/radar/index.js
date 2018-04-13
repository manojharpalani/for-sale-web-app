import React from 'react';
import SimpleRadarChart from './Components/SimpleRadarChart';
import SpecifiedDomainRadarChart from './Components/SpecifiedDomainRadarChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const Radar = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Radar Chart" match={match}/>

            <div className="row">
                <CardBox heading="Simple Radar Chart">
                    <SimpleRadarChart />
                </CardBox>
                <CardBox heading="Specified Domain Radar Chart">
                    <SpecifiedDomainRadarChart />
                </CardBox>
            </div>
        </div>
    );
};

export default Radar;
