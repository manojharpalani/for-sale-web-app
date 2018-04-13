import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import SimpleSelect from './simple/SimpleSelect';
import NativeSelect from './native/NativeSelect';
import MultipleSelect from './multi/MultipleSelect';
import DialogSelect from './dialog/DialogSelect';

const Selects = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Selects" match={match} />

            <div className="row mb-md-4">
                <CardBox styleName="col-12" heading="Simple select">
                    <SimpleSelect />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" heading="Native Select">
                    <NativeSelect />
                </CardBox>
            </div>

            <div className="row">
                <CardBox heading="Multiple select">
                    <MultipleSelect />
                </CardBox>
                <CardBox heading="Dialog select">
                    <DialogSelect />
                </CardBox>
            </div>
        </div>
    );
};

export default Selects;

