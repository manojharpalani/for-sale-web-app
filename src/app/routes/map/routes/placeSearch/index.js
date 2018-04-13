import React from 'react';
import SearchBoxExample from './Components/SearchBoxExample';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const PlaceSearch = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Search Box Map" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <SearchBoxExample />
                </CardBox>
            </div>
        </div>
    );
};

export default PlaceSearch;
