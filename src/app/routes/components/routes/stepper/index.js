import React from 'react';
import TextMobileStepper from './text/TextMobileStepper';
import DotsMobileStepper from './dot/DotsMobileStepper';
import ProgressMobileStepper from './progress/ProgressMobileStepper';
import HorizontalLinearStepper from './linear/HorizontalLinearStepper';
import HorizontalLabelPositionBelowStepper from './linear/HorizontalLabelPositionBelowStepper';
import HorizontalNonLinearStepper from './nonLinear/HorizontalNonLinearStepper';
import HorizontalNonLinearAlternativeLabelStepper from './nonLinear/HorizontalNonLinearAlternativeLabelStepper';
import VerticalLinearStepper from './vertical/VerticalLinearStepper';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

const Stepper = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Stepper" match={match}
                             description="Steppers convey progress through numbered steps."/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Horizontal Linear" headerOutside>
                    <HorizontalLinearStepper/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Horizontal Linear - Alternative Label" headerOutside>
                    <HorizontalLabelPositionBelowStepper/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="Vertical Stepper" headerOutside>
                    <VerticalLinearStepper/>
                </CardBox>
            </div>


            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Horizontal Non-linear" headerOutside>
                    <HorizontalNonLinearStepper/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Horizontal Non Linear - Alternative Label" headerOutside>
                    <HorizontalNonLinearAlternativeLabelStepper/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox heading="Mobile Stepper - Dots" headerOutside>
                    <DotsMobileStepper/>
                </CardBox>
                <CardBox heading="Mobile Stepper - Progress" headerOutside>
                    <ProgressMobileStepper/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Mobile Stepper - Text" headerOutside>
                    <TextMobileStepper/>
                </CardBox>
            </div>
        </div>
    );
};

export default (Stepper);
