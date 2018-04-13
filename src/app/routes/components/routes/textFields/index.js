import React from 'react';
import TextFields from './textField/TextFields';
import ComposedTextField from './components/ComposedTextField';
import TextFieldMargins from './layout/TextFieldMargins';
import InputAdornments from './inputAdornments/InputAdornments';
import FormattedInputs from './formattedInputs/FormattedInputs';
import Inputs from './inputs/Inputs';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

const TextField = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Text Fields" match={match} />

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="TextField">
                    <TextFields />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Components">
                    <ComposedTextField />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Layout">
                    <TextFieldMargins />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Input Adornments">
                    <InputAdornments />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Formatted Inputs">
                    <FormattedInputs />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Inputs">
                    <Inputs />
                </CardBox>
            </div>
        </div>
    );
};

export default (TextField);

