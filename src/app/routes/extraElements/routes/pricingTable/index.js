import React from 'react';

import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';

import Basic from './Basic';
import Classic from './Classic';
import Circle from './Circle';
import Dark from './Dark';

const PricingTable = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Pricing Table" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent" heading="Basic">
                    <Basic />
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent" heading="Circle">
                    <Circle />
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent" heading="Classic">
                    <Classic />
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent" heading="Dark">
                    <Dark />
                </CardBox>
            </div>
        </div>
    );
};

export default PricingTable;

