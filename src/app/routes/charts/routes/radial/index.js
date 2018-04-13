import React from 'react';
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const Radial = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Radial Chart" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Simple Radial Bar Chart">
                    <SimpleRadialBarChart />
                </CardBox>
            </div>
        </div>
    );
};

export default Radial;
