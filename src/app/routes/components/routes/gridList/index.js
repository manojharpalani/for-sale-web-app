import React from 'react';
import ImageGridList from './image/ImageGridList';
import TitlebarGridList from './titlebars/TitlebarGridList';
import SingleLineGridList from './singleLine/SingleLineGridList';
import AdvancedGridList from './advance/AdvancedGridList';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

const GridLists = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Grid List" match={match} />

            <div className="row">
                <CardBox styleName="col-sm-6 col-12" heading="Image-only Grid list">
                    <ImageGridList />
                </CardBox>

                <CardBox styleName="col-sm-6 col-12" heading="Advanced Grid list">
                    <AdvancedGridList />
                </CardBox>

                <CardBox styleName="col-lg-12" heading="Single line Grid list">
                    <SingleLineGridList />
                </CardBox>

                <CardBox styleName="col-lg-12 col-12" heading="Grid list with titlebars">
                    <TitlebarGridList />
                </CardBox>
            </div>
        </div>
    );
};

export default (GridLists);

