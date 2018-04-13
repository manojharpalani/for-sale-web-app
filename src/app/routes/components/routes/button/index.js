import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import FlatButtons from './flat/FlatButtons';
import FAB from './fab/FloatingActionButtons';
import Raised from './raised/RaisedButton';
import IconButtons from './icon/IconButtons';
import ColorScheme from "./colorScheme/ColorScheme";
import Complex from './complex/ComplexButtons';
import DifferentSizesButtons from "./differentSizes/DifferentSizesButtons";
import SocialMediaButtons from "./socialMediaButtons/SocialMediaButtons";

const Buttons = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Buttons" match={match} />
            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Color Scheme">
                    <div>Bootstrap Color Scheme With Material Concept</div>
                    <ColorScheme />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Icon Buttons">
                    <div>
                        You can pick any icon from the font-icons listed under Icons page. Or feel free to add any new
                        font icons and use that.
                    </div>
                    <IconButtons />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6 col-12" heading="Different Sizes">
                    <div>Material buttons with different sizes</div>
                    <DifferentSizesButtons />
                </CardBox>

                <CardBox styleName="col-lg-6 col-12" heading="Flat & Full Width Buttons">
                    <div>All type buttons with disabled states</div>
                    <FlatButtons />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6 col-12" heading="Raised Buttons">
                    <div>Bootstrap Color Scheme With Material Concept</div>
                    <Raised />
                </CardBox>

                <CardBox styleName="col-lg-6 col-12" heading="Floating Action Buttons">
                    <div>Bootstrap Color Scheme With Material Concept</div>
                    <FAB />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading="Social Media Buttons">
                    <div>
                        Various social media buttons for your project
                    </div>
                    <SocialMediaButtons />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Complex Buttons">
                    <Complex />
                </CardBox>
            </div>
        </div>
    );
};
export default Buttons;