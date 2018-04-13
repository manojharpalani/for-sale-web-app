import React from 'react';
import SimpleMenu from './sample/SimpleMenu';
import SimpleListMenu from './selected/SimpleListMenu';
import LongMenu from './long/LongMenu';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import UserInfo from "components/UserInfo/index";
import PaperSheet from "./paper/PaperSheet";


const MenusNPaper = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Menus and Paper" match={match} />

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 text-center" heading="Simple menus" headerOutside>
                    <SimpleMenu />
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 d-flex justify-content-center" heading="Menu With Icon" headerOutside>
                    <UserInfo />
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 text-center" heading="Menu with More Button" headerOutside>
                    <LongMenu />
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-4 text-center" heading="Menu With Selected Value" headerOutside>
                    <SimpleListMenu />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="p-0 bg-transparent no-shadow" heading="Paper" headerOutside>
                    <PaperSheet/>
                </CardBox>
            </div>
        </div>
    );
};

export default MenusNPaper;

