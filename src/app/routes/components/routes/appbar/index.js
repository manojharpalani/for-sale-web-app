import React from 'react';
import SimpleAppBar from './simple/SimpleAppBar';
import ButtonAppBar from './button/ButtonAppBar';
import ContainerHeader from "components/ContainerHeader/index";
import CardBox from "components/CardBox/index";
import FullFeatured from "./fullyFeatured/FullFeatured";

const AppBar = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="App Bar" match={match} />

            <div className="row mb-md-4">
                <CardBox cardStyle="p-0" heading="Simple App bar" headerOutside>
                    <SimpleAppBar />
                </CardBox>

                <CardBox cardStyle="p-0" heading="Colored App bar" headerOutside>
                    <ButtonAppBar />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12"  cardStyle="p-0" heading="Fully Featured App bar" headerOutside>
                    <FullFeatured />
                </CardBox>
            </div>
        </div>
    );
};

export default (AppBar);
