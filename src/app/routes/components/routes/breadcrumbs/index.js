import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import Simple from './simple/index';
import NoListBreadcrumbs from './noList/index';

const Breadcrumbs = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Breadcrumbs" match={match}/>

            <div className="row">
                <CardBox styleName="col-md-6" heading="Simple">
                    <Simple/>
                </CardBox>

                <CardBox styleName="col-md-6" heading="No list">
                    <NoListBreadcrumbs/>
                </CardBox>
            </div>
        </div>
    );
};
export default Breadcrumbs;