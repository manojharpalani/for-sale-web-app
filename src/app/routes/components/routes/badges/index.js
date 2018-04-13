import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import Contextual from './bootstrap/contextual';
import Links from './bootstrap/links';
import Pills from './bootstrap/pills';
import ButtonWithBadge from "./button/ButtonWithBadge";
import BadgeWithHeading from "./heading/BadgeWithHeading";

const Badges = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Badges" match={match} />

            <div className="row mb-md-4">
                <div className="col-md-6 order-md-2">
                    <div className="jr-entry-header">
                        <h3 className="entry-heading">Scaling Badges</h3>
                        <div className="entry-description">
                            Badges scale to match the size of the immediate parent element by using
                            relative font sizing and <a className="text-danger" href="javascript:void(0)" title="em">
                            em
                        </a> units.
                        </div>
                    </div>
                </div>

                <CardBox styleName="col-md-6 order-md-1">
                    <BadgeWithHeading />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <div className="col-md-6 order-md-2">
                    <div className="jr-entry-header">
                        <h3 className="entry-heading">Inside Links & Butons</h3>
                        <div className="entry-description">
                            Badges can be used as part of links or buttons to provide a counter. Give two examples here
                            with sr-only class applied.
                        </div>
                    </div>
                </div>

                <CardBox styleName="col-md-6 order-md-1">
                    <ButtonWithBadge />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <div className="col-md-6 order-md-2">
                    <div className="jr-entry-header">
                        <h3 className="entry-heading">Contextual variations</h3>
                        <div className="entry-description">
                            Add any of the below mentioned modifier classes to change the appearance of a badge.
                        </div>
                    </div>
                </div>

                <CardBox styleName="col-md-6 order-md-1" cardStyle="py-sm-5">
                    <Contextual />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <div className="col-md-6 order-md-2">
                    <div className="jr-entry-header">
                        <h3 className="entry-heading">Pill Badges</h3>
                        <div className="entry-description">
                            Use the .badge-pill modifier class to make badges more rounded
                            (with a larger border-radius and additional horizontal padding). Useful if you miss the
                            badges from v3.
                        </div>
                    </div>
                </div>

                <CardBox styleName="col-md-6 order-md-1" cardStyle="py-sm-5">
                    <Pills />
                </CardBox>
            </div>

            <div className="row">
                <div className="col-md-6 order-md-2">
                    <div className="jr-entry-header">
                        <h3 className="entry-heading">Link Badges</h3>
                        <div className="entry-description">
                            Using the contextual <a className="text-danger" href="javascript:void(0)" title="em">
                            .badge-*
                        </a> classes on
                            an<code>&lt;a&gt;</code>element quickly provide actionable badges with hover and focus
                            states.
                        </div>
                    </div>
                </div>

                <CardBox styleName="col-md-6 order-md-1" cardStyle="py-sm-5">
                    <Links />
                </CardBox>
            </div>

        </div>
    );
};

export default Badges;

