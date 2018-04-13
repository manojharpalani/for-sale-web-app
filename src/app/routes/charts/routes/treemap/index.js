import React from 'react';
import SimpleTreemap from './Components/SimpleTreemap';
import CustomContentTreemap from './Components/CustomContentTreemap';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const Treemap = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Tree Map" match={match}/>

            <div className="row">
                <CardBox heading="Simple Tree map">
                    <SimpleTreemap/>
                </CardBox>
                <CardBox heading="Custom Content Treemap">
                    <CustomContentTreemap/>
                </CardBox>
            </div>
        </div>
    );
};

export default Treemap;
