import React from 'react';
import SimpleList from './dividers/SimpleList';
import FolderList from './folder/FolderList';
import InsetList from './inset/InsetList';
import CheckboxList from './checkbox/CheckboxList';
import CheckboxListSecondary from './checkbox/CheckboxListSecondary';
import SwitchListSecondary from './switch/SwitchListSecondary';
import InteractiveList from './interactive/InteractiveList';
import NestedList from './nestedList/NestedList';
import PinnedSubheaderList from './pinnedSubHeader/PinnedSubheaderList';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import CheckBoxListControl from "./checkBoxListControl/CheckBoxListControl";
import ListDividers from "app/routes/components/routes/dividers/list/ListDividers";

const Lists = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Lists" match={match} />

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="Folder List"
                    headerOutside
                >
                    <FolderList />
                </CardBox>

                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0" heading="Folder List"
                    headerOutside
                >
                    <CheckboxListSecondary />
                </CardBox>

                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="Switch List Controls"
                    headerOutside
                >
                    <SwitchListSecondary />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="List Dividers"
                    headerOutside
                >
                    <ListDividers />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="Simple List"
                    headerOutside
                >
                    <SimpleList />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="Inset List"
                    headerOutside
                >
                    <InsetList />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading="Nested List"
                    headerOutside
                >
                    <NestedList />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-6 col-12"
                    cardStyle="p-0"
                    heading="Checkbox Secondary List Controls"
                    headerOutside
                >
                    <CheckBoxListControl />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-sm-6 col-12"
                    cardStyle="p-0"
                    heading="Checkbox List Controls"
                    headerOutside
                >
                    <CheckboxList />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-sm-6 col-12"
                    cardStyle="p-0"
                    heading="Pinned Subheader List"
                    headerOutside
                >
                    <PinnedSubheaderList />
                </CardBox>
            </div>

            <div className="row">
                <CardBox
                    styleName="col-lg-12 col-12"
                    cardStyle="p-0 bg-transparent no-shadow"
                    heading="Interactive List Controls"
                    headerOutside
                >
                    <InteractiveList />
                </CardBox>
            </div>
        </div>
    );
};

export default (Lists);

