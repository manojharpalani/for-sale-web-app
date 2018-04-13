import React from 'react';
import WithLabelBottomNavigation from './withLabel/WithLabelBottomNavigation';
import WithoutLabelBottomNavigation from './withoutLabel/WithoutLabelBottomNavigation';
import IconWithLabelBottomNavigation from './iconWithoutLabel/IconWithLabelBottomNavigation';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

const BottomNavigation = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Bottom Navigation" match={match} />

            <div className="row">
                <CardBox styleName="col-lg-4 col-md-6 col-12" heading="Bottom Navigation with labels" headerOutside>
                    <WithLabelBottomNavigation />
                </CardBox>

                <CardBox styleName="col-lg-4 col-md-6 col-12 order-lg-3" heading="Bottom Navigation With Active Label" headerOutside>
                    <WithoutLabelBottomNavigation />
                </CardBox>

                <CardBox styleName="col-lg-4 col-md-12 col-12" heading="Bottom Navigation with No Label" headerOutside>
                    <IconWithLabelBottomNavigation />
                </CardBox>

            </div>
        </div>
    );
};
export default BottomNavigation;