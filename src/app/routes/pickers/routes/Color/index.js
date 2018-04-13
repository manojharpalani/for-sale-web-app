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
import Basic from "./basic/index";
import BasicToggle from "./basicToggle";
import BasicPositioning from "./basicPositioning";
import CustomPicker from "./customPicker";
import CustomPointer from "./customPointer";
import WithRedux from "./withRedux";

const ColorPicker = () => {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Alpha pickers">
                <AlphaPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Hue pickers">
                <HuePicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Circle pickers">
                <CirclePicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Compact pickers">
                <CompactPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Block pickers">
                <BlockPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Chrome Pickers">
                <ChromePicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Github pickers">
                <GithubPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Twitter pickers">
                <TwitterPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="With Redux">
                <WithRedux/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Sketch pickers">
                <SketchPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Material pickers">
                <MaterialPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Slider pickers">
                <SliderPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic pickers">
                <Basic/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic Toggle">
                <BasicToggle/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Custom Picker">
                <CustomPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Custom Pointer">
                <CustomPointer/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Photoshop pickers">
                <PhotoshopPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Swatches pickers">
                <SwatchesPicker/>
            </CardBox>
            <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center" heading="Basic Positioning">
                <BasicPositioning/>
            </CardBox>
        </div>
    )
};

export default ColorPicker;
