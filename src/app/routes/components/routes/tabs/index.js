import React from 'react';
import BasicTabs from './basic/BasicTabs';
import BasicTabsWrappedLabel from './wrappedLabels/BasicTabsWrappedLabel';
import FullWidthTabs from './fixed/FullWidthTabs';
import CenteredTabs from './centered/CenteredTabs';
import ScrollableTabsButtonAuto from './scrollable/automatic/ScrollableTabsButtonAuto';
import ScrollableTabsButtonForce from './scrollable/forced/ScrollableTabsButtonForce';
import ScrollableTabsButtonPrevent from './scrollable/prevent/ScrollableTabsButtonPrevent';
import IconTabs from './icon/IconTabs';
import IconLabelTabs from './icon/IconLabelTabs';
import DisabledTabs from './disabled/DisabledTabs';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

const Tabs = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Tabs" match={match} />

            <div className="row">
                <CardBox heading="Basic Tabs">
                    <BasicTabs />
                </CardBox>
                <CardBox heading="Fixed Tabs Full width">
                    <FullWidthTabs />
                </CardBox>
            </div>

            <div className="row">
                <CardBox heading="Icon Tabs">
                    <IconTabs />
                </CardBox>
                <CardBox heading="Disabled Tab">
                    <DisabledTabs />
                </CardBox>
            </div>

            <div className="row">
                <CardBox heading="Wrapped Labels">
                    <BasicTabsWrappedLabel />
                </CardBox>
                <CardBox heading="Icon Tabs with Label">
                    <IconLabelTabs />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Fixed Tabs Centered">
                    <CenteredTabs />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Automatic Scroll Buttons">
                    <ScrollableTabsButtonAuto />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Forced Scroll Buttons">
                    <ScrollableTabsButtonForce />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Prevent Scroll Buttons">
                    <ScrollableTabsButtonPrevent />
                </CardBox>
            </div>
        </div>
    );
};

export default (Tabs);