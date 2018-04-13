import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import 'jquery-slimscroll/jquery.slimscroll.min';

import {toggleCollapsedNav} from 'actions/index';

import Header from "components/Header/index";
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import Dashboard from './routes/dashboard';
import Components from './routes/components';
import Icons from "./routes/icons/index";
import Form from './routes/form';
import Editors from "./routes/editors";
import Pickers from "./routes/pickers";
import Extensions from "./routes/extensions";
import Table from './routes/table';
import Chart from './routes/charts';
import Map from './routes/map';
import Calendar from './routes/calendar';
import TimeLine from './routes/timeLine';
import CustomViews from './routes/customViews';
import Widgets from './routes/Widgets';
import Metrics from './routes/Metrics';
import ExtraElements from './routes/extraElements'
import eCommerce from './routes/eCommerce'
import AppModule from './routes/appModule'
import ToDo from "./routes/todo/basic/index";
import Mail from "./routes/mail/basic/index";
import ChatPanel from './routes/chatPanel/basic/index';
import Contact from "./routes/contact/basic/index";
import ExtraPages from './routes/extraPages';
import Tour from "../components/Tour/index";

import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import ColorOption from "containers/Customizer/ColorOption";
import ContactWithRedux from "app/routes/contact/redux/index";
import ChatPanelWithRedux from "app/routes/chatPanel/redux/index";
import ToDoWithRedux from "app/routes/todo/redux/index";
import MailWithRedux from "app/routes/mail/redux/index";


class App extends React.Component {
    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };


    render() {
        const {match, drawerType} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";

        return (
            <div className={`app-container ${drawerStyle}`}>
                <Tour/>

                <Sidebar onToggleCollapsedNav={this.onToggleCollapsedNav.bind(this)}/>
                <div className="app-main-container">
                    <Header drawerType={drawerType} onToggleCollapsedNav={this.onToggleCollapsedNav}/>
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Route path={`${match.url}/dashboard`} component={Dashboard}/>
                            <Route path={`${match.url}/components`} component={Components}/>
                            <Route path={`${match.url}/icons`} component={Icons}/>
                            <Route path={`${match.url}/form`} component={Form}/>
                            <Route path={`${match.url}/editor`} component={Editors}/>
                            <Route path={`${match.url}/pickers`} component={Pickers}/>
                            <Route path={`${match.url}/extensions`} component={Extensions}/>
                            <Route path={`${match.url}/table`} component={Table}/>
                            <Route path={`${match.url}/chart`} component={Chart}/>
                            <Route path={`${match.url}/map`} component={Map}/>
                            <Route path={`${match.url}/calendar`} component={Calendar}/>
                            <Route path={`${match.url}/time-line`} component={TimeLine}/>
                            <Route path={`${match.url}/custom-views`} component={CustomViews}/>
                            <Route path={`${match.url}/widgets`} component={Widgets}/>
                            <Route path={`${match.url}/metrics`} component={Metrics}/>
                            <Route path={`${match.url}/extra-elements`} component={ExtraElements}/>
                            <Route path={`${match.url}/ecommerce`} component={eCommerce}/>
                            <Route path={`${match.url}/app-module`} component={AppModule}/>
                            <Route path={`${match.url}/to-do`} component={ToDo}/>
                            <Route path={`${match.url}/to-do-redux`} component={ToDoWithRedux}/>
                            <Route path={`${match.url}/mail`} component={Mail}/>
                            <Route path={`${match.url}/mail-redux`} component={MailWithRedux}/>
                            <Route path={`${match.url}/chat`} component={ChatPanel}/>
                            <Route path={`${match.url}/chat-redux`} component={ChatPanelWithRedux}/>
                            <Route path={`${match.url}/contact`} component={Contact}/>
                            <Route path={`${match.url}/contact-redux`} component={ContactWithRedux}/>
                            <Route path={`${match.url}/extra-pages`} component={ExtraPages}/>
                        </div>
                    </main>
                    <Footer/>
                </div>
                <ColorOption/>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {navCollapsed, drawerType} = settings;
    return {navCollapsed, drawerType}
};
export default withRouter(connect(mapStateToProps, {toggleCollapsedNav})(App));