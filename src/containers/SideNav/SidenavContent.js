import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'material-ui/Button';
import 'jquery-slimscroll/jquery.slimscroll.min';


class SideNavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const $nav = $(this.nav);
        const slideDuration = 250;

        $nav.slimscroll({
            height: '100%'
        });

        const pathname = `#${history.location.pathname}`;// get current path

        $("ul.nav-menu > li.menu").click(function () {
            const menuLi = this;
            $("ul.nav-menu > li.menu").not(menuLi).removeClass("open");
            $("ul.nav-menu > li.menu ul").not($("ul", menuLi)).slideUp(slideDuration);
            $("> ul", menuLi).slideToggle(slideDuration);
            $(menuLi).toggleClass("open");
        });

        $("ul.sub-menu li").click(function (e) {
            let superSubMenu = $(this).parent();
            if (superSubMenu.parent().hasClass("active")) {
                $("li", superSubMenu).not($(this)).removeClass("active");
            }
            else {
                $("ul.sub-menu li").not($(this)).removeClass("active");
            }

            $(this).toggleClass("active");
            e.stopPropagation();
        });

        const activeLi = $('a[href="' + pathname + '"]');// select current a element
        const activeNav = activeLi.closest("ul"); // select closest ul
        if (activeNav.hasClass("sub-menu")) {
            activeNav.slideDown(slideDuration);
            activeNav.parent().addClass("open");
            activeLi.parent().addClass("active");
        } else {
            activeLi.parent().addClass("open");
        }
    }


    render() {
        return (
            <ul className="nav-menu" ref={(c) => {
                this.nav = c;
            }}>

                <li className="nav-header">Main</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                        <span className="nav-text">Dashboard</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/dashboard/default">
                                <span className="nav-text">Default</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/dashboard/eCommerce">
                                <span className="nav-text text-transform-none">eCommerce</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/dashboard/news">
                                <span className="nav-text">News</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/dashboard/intranet">
                                <span className="nav-text">Intranet</span>
                            </Button>
                        </li>
                    </ul>

                </li>

                <li className="ui_tooltip menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                        <span className="nav-text">Components</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/components/alerts">
                                <span className="nav-text">Alerts</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/appbar">
                                <span className="nav-text">App Bar</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/avatars">
                                <span className="nav-text">Avatars</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/badges">
                                <span className="nav-text">Badge</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/bottom-navigation">
                                <span className="nav-text">Bottom Navigation</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/breadcrumbs">
                                <span className="nav-text">Breadcrumbs</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/buttons">
                                <span className="nav-text">Buttons</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/button-group">
                                <span className="nav-text">Button Group</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/cards">
                                <span className="nav-text">Cards</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/carousel">
                                <span className="nav-text">Carousel</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/chips">
                                <span className="nav-text">Chips</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/color-picker">
                                <span className="nav-text">Color Picker</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/dialogs">
                                <span className="nav-text">Dialogs</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/dividers">
                                <span className="nav-text">Dividers</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/expansion-panel">
                                <span className="nav-text">Expansion Panel</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/drawer">
                                <span className="nav-text">Drawer</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/grid-list">
                                <span className="nav-text">Grid List</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/list">
                                <span className="nav-text">Lists</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/menu-paper">
                                <span className="nav-text">Menus & Paper</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/pickers">
                                <span className="nav-text">Pickers</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/popovers">
                                <span className="nav-text">Popovers</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/progressbar">
                                <span className="nav-text">Progress</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/selects">
                                <span className="nav-text">Selects</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/selection">
                                <span className="nav-text">Selection Control</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/snackbar">
                                <span className="nav-text">Snackbars</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/stepper">
                                <span className="nav-text">Stepper</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/tables">
                                <span className="nav-text">Tabels</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/tabs">
                                <span className="nav-text">Tabs</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/text-fields">
                                <span className="nav-text">Text Fields</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/tooltips">
                                <span className="nav-text">Tooltips</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/components/typography">
                                <span className="nav-text">Typography</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/widgets">
                        <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
                        <span className="nav-text">Widgets</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/metrics">
                        <i className="zmdi zmdi-trending-up zmdi-hc-fw"/>
                        <span className="nav-text">Metrics</span>
                    </Button>
                </li>

                <li className="nav-header">View</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                        <span className="nav-text">Tables</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/table/basic">
                                <span className="nav-text">Basic Table</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/table/data">
                                <span className="nav-text">Data Table</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="timeline_tooltip menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-swap-alt zmdi-hc-fw zmdi-hc-rotate-90"/>
                        <span className="nav-text">Time Line</span>
                    </Button>
                    <ul className="sub-menu">

                        <li>
                            <Button className="prepend-icon" href="#/app/time-line/default">
                                <span className="nav-text">Default</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/time-line/default-with-icon">
                                <span className="nav-text">Default with Icons</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/time-line/left-align">
                                <span className="nav-text">Left Aligned</span>
                            </Button>
                        </li>
                        {/*<li>
                            <Button className="prepend-icon" href="#/app/time-line/zigzag">
                                <span className="nav-text">Zigzag</span>
                            </Button>
                        </li>*/}
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
                        <span className="nav-text">Custom Views</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/custom-views/simple-list">
                                <span className="nav-text">Plain List View</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/custom-views/strip-list">
                                <span className="nav-text">Plain List with Divider</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/custom-views/card-list">
                                <span className="nav-text">Cards List View</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Form</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-book-image zmdi-hc-fw"/>
                        <span className="nav-text">Forms</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/form/components">
                                <span className="nav-text">Components</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/form/stepper">
                                <span className="nav-text">Stepper</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Extensions</li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-code-setting zmdi-hc-fw"/>
                        <span className="nav-text">Editors</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/editor/ck">
                                <span className="nav-text">CKEditor</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/editor/wysiswyg">
                                <span className="nav-text">WYSISWYG Editor</span>
                            </Button>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-brush zmdi-hc-fw"/>
                        <span className="nav-text">Pickers</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/pickers/date-time">
                                <span className="nav-text">Date & Time Pickers</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/pickers/color">
                                <span className="nav-text">Color Pickers</span>
                            </Button>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-key zmdi-hc-fw"/>
                        <span className="nav-text">Extensions</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/extensions/dnd">
                                <span className="nav-text">Drag and Drop</span>
                            </Button>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-chart zmdi-hc-fw"/>
                        <span className="nav-text">Chart</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/line">
                                <span className="nav-text">Line Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/bar">
                                <span className="nav-text">Bar Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/area">
                                <span className="nav-text">Area chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/composed">
                                <span className="nav-text">Composed Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/scatter">
                                <span className="nav-text">Scatter Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/pie">
                                <span className="nav-text">Pie Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/radial">
                                <span className="nav-text">Radial Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/radar">
                                <span className="nav-text">Radar Chart</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/chart/treemap">
                                <span className="nav-text">Tree Map</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="map_tooltip menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-google-maps zmdi-hc-fw"/>
                        <span className="nav-text">Google Map</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/map/simple">
                                <span className="nav-text">Simple Map</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/styled">
                                <span className="nav-text">Styled Map</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/geo-location">
                                <span className="nav-text">Geo Location</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/directions">
                                <span className="nav-text">Map Direction</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/overlay">
                                <span className="nav-text">Map Overlay</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/kml">
                                <span className="nav-text">Map Km Layer</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/popup-info">
                                <span className="nav-text">Map Popup Info</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/traffic">
                                <span className="nav-text">Map Traffic Layer</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/street-view">
                                <span className="nav-text">Street View</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/event">
                                <span className="nav-text">Event Listener</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/drawing">
                                <span className="nav-text">Map Drawing</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/place-search">
                                <span className="nav-text">Map Search</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/map/clustering">
                                <span className="nav-text">Map Clustering</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Modules</li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
                        <span className="nav-text">Calendar</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/basic">
                                <span className="nav-text">Basic</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/cultures">
                                <span className="nav-text">Cultures</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/dnd">
                                <span className="nav-text">Dnd</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/popup">
                                <span className="nav-text">Popup</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/rendering">
                                <span className="nav-text">Rendering</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/selectable">
                                <span className="nav-text">Selectable</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/calendar/timeslots">
                                <span className="nav-text">Timeslots</span>
                            </Button>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"/>
                        <span className="nav-text text-transform-none">eCommerce</span>
                    </Button>

                    <ul className="sub-menu">

                        <li>
                            <Button className="prepend-icon" href="#/app/ecommerce/products-list">
                                <span className="nav-text">Products List</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/ecommerce/products-grid">
                                <span className="nav-text">Products Grid</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-collection-item-8 zmdi-hc-fw"/>
                        <span className="nav-text">App Module</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/login-1">
                                <span className="nav-text">Login Page 1</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/login-2">
                                <span className="nav-text">Login Page 2</span>
                            </Button>
                        </li>

                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/login-with-stepper">
                                <span className="nav-text">Login with Stepper</span>
                            </Button>
                        </li>

                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/sign-up-1">
                                <span className="nav-text">Signup Page 1</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/sign-up-2">
                                <span className="nav-text">Signup Page 2</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/forgot-password-1">
                                <span className="nav-text">Forgot Password 1</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/forgot-password-2">
                                <span className="nav-text">Forgot Password 2</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/lock-screen-1">
                                <span className="nav-text">Lock Screen-1</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/app-module/lock-screen-2">
                                <span className="nav-text">Lock Screen-2</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/to-do">
                        <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                        <span className="nav-text">To-Do</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/to-do-redux">
                        <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                        <span className="nav-text">To-Do Redux</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/mail">
                        <i className="zmdi zmdi-email zmdi-hc-fw"/>
                        <span className="nav-text">Mail</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/mail-redux">
                        <i className="zmdi zmdi-email zmdi-hc-fw"/>
                        <span className="nav-text">Mail Redux</span>
                    </Button>
                </li>


                <li className="menu no-arrow">
                    <Button href="#/app/chat">
                        <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                        <span className="nav-text">Chat</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/chat-redux">
                        <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                        <span className="nav-text">Chat Redux</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/contact">
                        <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                        <span className="nav-text">Contact</span>
                    </Button>
                </li>

                <li className="menu no-arrow">
                    <Button href="#/app/contact-redux">
                        <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                        <span className="nav-text">Contact Redux</span>
                    </Button>
                </li>

                <li className="nav-header">Extras</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                        <span className="nav-text">Icons</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/icons/material">
                                <span className="nav-text">Google Material Icons</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-collection-bookmark zmdi-hc-fw zmdi-hc-rotate-90"/>
                        <span className="nav-text">Extra Elements</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-elements/pricing-table">
                                <span className="nav-text">Pricing Table</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-elements/callouts">
                                <span className="nav-text">Callouts</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-elements/testimonials">
                                <span className="nav-text">Testimonials</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-pages zmdi-hc-fw"/>
                        <span className="nav-text">Extra Pages</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/about-us">
                                <span className="nav-text">About Us</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/contact-us">
                                <span className="nav-text">Contact Us</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/blog">
                                <span className="nav-text">Blog</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/faq">
                                <span className="nav-text">FAQ</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/portfolio">
                                <span className="nav-text">Portfolio</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/error-404">
                                <span className="nav-text">404 Error Page</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="prepend-icon" href="#/app/extra-pages/error-500">
                                <span className="nav-text">500 Error Page</span>
                            </Button>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-device-hub zmdi-hc-fw"/>
                        <span className="nav-text">Menu Levels</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="javascript:void(0)">
                                <span className="nav-text">Level 1</span>
                            </Button>
                        </li>
                        <li className="menu">
                            <Button className="prepend-icon" href="javascript:void(0)">
                                <span className="nav-text">Level 1</span>
                            </Button>

                            <ul className="sub-menu">
                                <li>
                                    <Button href="javascript:void(0)">
                                        <span className="nav-text">Level 2</span>
                                    </Button>
                                </li>
                                <li className="menu">
                                    <Button href="javascript:void(0)">
                                        <span className="nav-text">Level 2</span>
                                    </Button>

                                    <ul className="sub-menu">
                                        <li>
                                            <Button href="javascript:void(0)">
                                                <span className="nav-text">Level 3</span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button href="javascript:void(0)">
                                                <span className="nav-text">Level 3</span>
                                            </Button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        );
    }
}

export default withRouter(SideNavContent);
