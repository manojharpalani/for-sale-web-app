import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import CircularIndeterminate from './circular/indeterminate/CircularIndeterminate';
import CircularFab from './circular/interactive/CircularFab';
import CircularDeterminate from './circular/determinate/CircularDeterminate';
import LinearIndeterminate from './linear/indeterminate/LinearIndeterminate';
import LinearDeterminate from './linear/determinate/LinearDeterminate';
import LinearBuffer from './linear/buffer/LinearBuffer';
import LinearQuery from './linear/query/LinearQuery';

const Progress = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Progress" match={match} />

            <div className="row">
                <CardBox styleName="col-md-6 col-12" childrenStyle="d-flex justify-content-center" heading="Indeterminate Circular">
                    <CircularIndeterminate />
                </CardBox>

                <CardBox styleName="col-md-6 col-12" childrenStyle="d-flex justify-content-center" heading="Determinate Circular">
                    <CircularDeterminate />
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle="" heading="Indeterminate Linear">
                    <LinearIndeterminate />
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle="" heading="Determinate Linear">
                    <LinearDeterminate />
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle="" heading="Buffer Linear">
                    <LinearBuffer />
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle="" heading="Query Linear">
                    <LinearQuery />
                </CardBox>

                <CardBox styleName="col-lg-12 col-12" childrenStyle="d-flex justify-content-center"
                         heading="Interactive Integration">
                    <CircularFab />
                </CardBox>
            </div>
        </div>
    );
};

export default (Progress);

