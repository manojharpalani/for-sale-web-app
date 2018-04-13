import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import CardBox from 'components/CardBox';
import ButtonGroups from "./default/ButtonGroups";
import FlatButtonGroup from "./flat/FlatButtonGroup";
import HighLightedButtonGroup from "./highLighted/HighLightedButtonGroup";
import IconFlatButtonGroup from "./iconFlatButton/IconFlatButtonGroup";
import IconButtonGroup from "./iconButton/IconButtonGroup";
import NestedButtonGroup from "./nested/NestedButtonGroup";

const ButtonGroup = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Button Group" match={match} />

            <div className="jr-entry-header">
                <h3 className="entry-heading">Horizontal Variations</h3>
                <div className="entry-description">
                    Default buttons group style
                </div>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Default Button Group">
                    <div>Default button group style</div>
                    <ButtonGroups />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Flat Button Group">
                    <div>Flat button group style</div>
                    <FlatButtonGroup />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Highlighted Button Group">
                    <div>Highlighted button group style</div>
                    <HighLightedButtonGroup />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Icon Button Group">
                    <div>Default button group style</div>
                    <IconButtonGroup />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Icon Flat Button Group">
                    <div>Default button group style</div>
                    <IconFlatButtonGroup />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12" heading="Nested Button Group">
                    <div>Default button group style</div>
                    <NestedButtonGroup />
                </CardBox>
            </div>

            <div className="jr-entry-header">
                <h3 className="entry-heading">Vertical Variations</h3>
                <div className="entry-description">
                    Default buttons group style
                </div>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Default Button Group">
                    <div>Default button group style</div>
                    <ButtonGroups isVertical />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Flat Button Group">
                    <div>Flat button group style</div>
                    <FlatButtonGroup isVertical />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Highlighted Button Group">
                    <div>Highlighted button group style</div>
                    <HighLightedButtonGroup isVertical />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Icon Button Group">
                    <div>Default button group style</div>
                    <IconButtonGroup isVertical />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Icon Flat Button Group">
                    <div>Default button group style</div>
                    <IconFlatButtonGroup isVertical />
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center" heading="Nested Button Group">
                    <div>Default button group style</div>
                    <NestedButtonGroup isVertical />
                </CardBox>
            </div>
        </div>
    );
};
export default ButtonGroup;