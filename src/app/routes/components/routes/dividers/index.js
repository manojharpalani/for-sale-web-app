import React from 'react';
import ListDividers from './list/ListDividers';
import InsetDividers from './inset/InsetDividers';
import InsetAvatarDividers from './insetAvatar/InsetAvatarDividers';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

const Dividers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Dividers" match={match} />

            <div className="row">
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="p-0" heading="List Dividers" headerOutside>
                    <ListDividers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="p-0" heading="Inset Dividers" headerOutside>
                    <InsetDividers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-12" cardStyle="p-0" heading="Inset Dividers" headerOutside>
                    <InsetAvatarDividers />
                </CardBox>
            </div>
        </div>
    );
};

export default Dividers;

