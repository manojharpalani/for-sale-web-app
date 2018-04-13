import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import Simple from './simple/index';
import PopoversList from './list/index';
import AnchorPlayground from './anchorPlayground'

const Popovers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Popovers" match={match}/>

            <div className="row mb-md-4">
                <CardBox childrenStyle="text-center" heading="No list">
                    <PopoversList/>
                </CardBox>

                <CardBox childrenStyle="text-center" heading="Simple">
                    <Simple/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12" heading="Anchor Playground">
                    <AnchorPlayground/>
                </CardBox>
            </div>
        </div>
    );
};
export default Popovers;