import React from 'react';
import DrawingView from './Components/DrawingView';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const Drawing = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Drawing View Map" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <DrawingView />
                </CardBox>
            </div>
        </div>
    );
};

export default Drawing;
