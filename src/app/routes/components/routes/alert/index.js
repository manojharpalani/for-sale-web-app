import React from 'react';
import ContainerHeader from "components/ContainerHeader/index";
import CardBox from "components/CardBox/index";
import DefaultAlerts from "./default/DefaultAlerts";
import DismissingAlerts from "./dismiss/DismissingAlerts";
import AlertsWithIcons from "./icon/AlertsWithIcons";
import HighlightedAlerts from "./heighlighted/HighlightedAlerts";
import AlertWithDetailed from "./detailed/AlertWithDetailed";


const Alerts = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Alerts" match={match} />

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-12"
                    heading="Default Alerts"
                    headerOutside
                >
                    <div>
                        Alerts are available for any length of text. There are total of eight css classes could be used
                        to draw an alert message. These classes are <span className="text-danger">.alert-success, .alert-danger, .alert-info,
                        .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark</span>
                    </div>

                    <DefaultAlerts />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-12"
                    heading="Highlighted Alerts"
                    headerOutside
                >
                    <div>
                        Alerts are available for any length of text. There are total of eight css classes could be used
                        to draw an alert message. These classes are <span className="text-danger">.alert-success, .alert-danger, .alert-info,
                        .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark</span>
                    </div>

                    <HighlightedAlerts />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-12"
                    heading="Dismissible Alerts"
                    headerOutside
                >
                    <div>
                        Alerts are available for any length of text. There are total of eight css classes could be used
                        to draw an alert message. These classes are <span className="text-danger">.alert-success, .alert-danger, .alert-info,
                        .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark</span>
                    </div>

                    <DismissingAlerts />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12"
                         heading="Alerts With Icons"
                         headerOutside
                >
                    <div>
                        Alerts are available for any length of text. There are total of eight css classes could be used
                        to draw an alert message. These classes are <span className="text-danger">.alert-success, .alert-danger, .alert-info,
                        .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark</span>
                    </div>

                    <AlertsWithIcons />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-12"
                    cardStyle="p-0 bg-transparent no-shadow"
                    heading="Alert With Detailed HTML"
                    headerOutside
                >
                    <div>
                        Alerts are available for any length of text. There are total of eight css classes could be used
                        to draw an alert message. These classes are <span className="text-danger">.alert-success, .alert-danger, .alert-info,
                        .alert-primary, .alert-secondary, .alert-warning, .alert-light, .alert-dark</span>
                    </div>

                    <AlertWithDetailed />
                </CardBox>
            </div>
        </div>
    );
};

export default Alerts;
