import React from 'react'
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
} from 'react-color';

import CardBox from "components/CardBox/index";
import Basic from "../../../pickers/routes/Color/basic/index";
import BasicToggle from "../../../pickers/routes/Color/basicToggle";
import BasicPositioning from "../../../pickers/routes/Color/basicPositioning";
import CustomPicker from "../../../pickers/routes/Color/customPicker";
import CustomPointer from "../../../pickers/routes/Color/customPointer";
import WithRedux from "../../../pickers/routes/Color/withRedux";
import ContainerHeader from "components/ContainerHeader/index";

const ColorPicker = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Color Picker" match={match} />

            <div className="row">
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Alpha pickers">
                    <AlphaPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Hue pickers">
                    <HuePicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Circle pickers">
                    <CirclePicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Compact pickers">
                    <CompactPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Block pickers">
                    <BlockPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Chrome Pickers">
                    <ChromePicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Github pickers">
                    <GithubPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Twitter pickers">
                    <TwitterPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="With Redux">
                    <WithRedux />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Sketch pickers">
                    <SketchPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Material pickers">
                    <MaterialPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Slider pickers">
                    <SliderPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic pickers">
                    <Basic />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic Toggle">
                    <BasicToggle />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Custom Picker">
                    <CustomPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Custom Pointer">
                    <CustomPointer />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Photoshop pickers">
                    <PhotoshopPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Swatches pickers">
                    <SwatchesPicker />
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic Positioning">
                    <BasicPositioning />
                </CardBox>
            </div>
        </div>
    )
};

export default ColorPicker;
