import React, {Component} from 'react';
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import {CircularProgress} from 'material-ui/Progress';
import 'jquery-slimscroll/jquery.slimscroll.min';
import folders from "../data/folders";
import filters from "../data/filters";
import labels from "../data/labels";
import options from "../data/options";
import MailList from "components/mail/MailList";

import ComposeMail from "components/mail/Compose/index";
import SearchBox from "components/SearchBox/index";
import MailDetail from "components/mail/MailDetail/index";
import {
    getAllMail,
    getImportantMail,
    getMailNavFilters,
    getMailNavLabels,
    getNavFolders,
    getReadMail,
    getStarredMail,
    getUnimportantMail,
    getUnreadMail,
    getUnselectedAllMail,
    getUnStarredMail,
    handleMailRequestClose,
    hideMailLoader,
    onAllMailSelect,
    onComposeMail,
    onDeleteMail,
    onFolderMenuItemSelect,
    onFolderSelect,
    onImportantSelect,
    onMailChecked,
    onMailLabelMenuItemSelect,
    onMailLabelSelect,
    onMailOptionMenuSelect,
    onMailSelect,
    onMailSend,
    onMailToggleDrawer,
    onOptionMenuItemSelect,
    onSearchMail,
    onStartSelect,
    setCurrentMailNull,
    updateMailSearch
} from 'actions/Mail';

const ITEM_HEIGHT = 34;

class MailWithRedux extends Component {

    MailSideBar = () => {
        return <div className="module-side">

            <div className="module-side-header">
                <div className="module-logo mb-4">
                    <i className="zmdi zmdi-email mr-4"/>
                    <span>Mailbox</span>
                </div>

                <div className="user-detail d-flex flex-row mb-3">
                    <img className="rounded-circle size-40" alt={this.props.user.name}
                         src={this.props.user.avatar}/>
                    <div className="module-user-info mx-2 mt-1 mb-0  ">
                        <div className="module-title">
                            <h5 className="mb-0 text-white">{this.props.user.name}</h5></div>
                        <div className="module-user-detail">
                            <a href="javascript:void(0)"
                               className="text-white">{this.props.user.email}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="module-side-content">
                <div className="module-side-scroll">
                    <div className="module-add-task">
                        <Button raised className="btn-block btn-primary text-white" onClick={() => {
                            this.props.onComposeMail();
                        }}> COMPOSE </Button>
                    </div>

                    <ul className="module-nav">

                        {this.getNavFolders()}

                        <li className="module-nav-label">
                            Filters
                        </li>

                        {this.getNavFilters()}

                        <li className="module-nav-label">
                            Labels
                        </li>

                        {this.getNavLabels()}

                    </ul>
                </div>
            </div>
        </div>
    };

    onDeleteMail = () => {
        this.props.onDeleteMail();
    };
    getNavFolders = () => {
        return folders.map((folder, index) =>
            <li key={index} onClick={() => {
                this.props.getNavFolders(folder);
                setTimeout(() => {
                    this.props.hideMailLoader();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={`${this.props.selectedFolder === folder.id ? 'active' : ''}`}>
                    <i className={`zmdi zmdi-${folder.icon}`}/>
                    <span>{folder.title}</span>
                </a>
            </li>
        )
    };
    onFolderMenuItemSelect = (folderId) => {
        this.props.handleMailRequestClose();
        this.props.onFolderMenuItemSelect(folderId);
    };
    onLabelMenuItemSelect = (label) => {
        this.props.handleMailRequestClose();
        this.props.onMailLabelMenuItemSelect(label);
    };
    handleRequestClose = () => {
        this.props.handleMailRequestClose();
    };
    getNavFilters = () => {
        return filters.map((filter, index) =>
            <li key={index} onClick={() => {
                this.props.getMailNavFilters(filter);
                setTimeout(() => {
                    this.props.hideMailLoader();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-${filter.icon}`}/>
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };
    onFolderSelect = event => {
        this.props.onFolderSelect();
        this.setState({
            anchorEl: event.currentTarget
        })
    };
    onLabelSelect = event => {
        this.props.onMailLabelSelect();
        this.setState({
            anchorEl: event.currentTarget
        })
    };
    onOptionMenuSelect = event => {
        this.props.onMailOptionMenuSelect();
        this.setState({
            anchorEl: event.currentTarget
        })
    };
    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.props.handleMailRequestClose();
                this.props.getAllMail();
                break;
            case 'None':
                this.props.handleMailRequestClose();
                this.props.getUnselectedAllMail();
                break;
            case 'Read':
                this.props.handleMailRequestClose();
                this.props.getReadMail();
                break;
            case 'Unread':
                this.props.handleMailRequestClose();
                this.props.getUnreadMail();
                break;
            case 'Starred':
                this.props.handleMailRequestClose();
                this.props.getStarredMail();
                break;
            case 'Unstarred':
                this.props.handleMailRequestClose();
                this.props.getUnStarredMail();
                break;
            case 'Important':
                this.props.handleMailRequestClose();
                this.props.getImportantMail();
                break;
            case 'Unimportant':
                this.props.handleMailRequestClose();
                this.props.getUnimportantMail();
                break;
        }
    };
    getAllMail = () => {
        this.props.getAllMail();
    };
    getUnselectedAllMail = () => {
        this.props.getUnselectedAllMail();
    };
    getReadMail = () => {
        this.props.getReadMail();
    };
    getUnreadMail = () => {
        this.props.getUnreadMail();
    };
    getStarredMail = () => {
        this.props.getStarredMail();
    };
    getUnStarredMail = () => {
        this.props.getUnStarredMail();
    };
    getImportantMail = () => {
        this.props.getImportantMail();
    };
    getUnimportantMail = () => {
        this.props.getUnimportantMail();
    };
    getNavLabels = () => {
        return labels.map((label, index) =>
            <li key={index} onClick={() => {
                this.props.getMailNavLabels(label);
                setTimeout(() => {
                    this.props.hideMailLoader();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-label-alt text-${label.color}`}/>
                    <span>{label.title}</span>
                </a>
            </li>
        )
    };
    searchMail = (searchText) => {
        this.props.onSearchMail(searchText);
    };
    displayMail = (currentMail, folderMails, noContentFoundMessage) => {
        return (<div className="module-box-column">
            {currentMail === null ?
                folderMails.length === 0 ?
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        {noContentFoundMessage}
                    </div>
                    :
                    <MailList mails={folderMails}
                              onMailSelect={this.onMailSelect.bind(this)}
                              onMailChecked={this.onMailChecked.bind(this)}/>
                :
                <MailDetail mail={currentMail} onStartSelect={this.onStartSelect.bind(this)}
                            onImportantSelect={this.onImportantSelect.bind(this)}/>}
        </div>)
    };
    getMailActions = () => {
        return <div>
            <IconButton onClick={this.onFolderSelect.bind(this)}>
                <i className="zmdi zmdi-folder"/>
            </IconButton>

            <IconButton onClick={this.onDeleteMail.bind(this)}>
                <i className="zmdi zmdi-delete"/>
            </IconButton>

            <IconButton
                onClick={this.onLabelSelect.bind(this)}>
                <i className="zmdi zmdi-label-alt"/>
            </IconButton>
        </div>
    };

    constructor() {
        super();
        this.state = {
            width: 1200,
            anchorEl: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.hideMailLoader();
        }, 1500);
        this.manageHeight();
    }

    componentDidUpdate() {
        this.manageHeight();
    }

    manageHeight() {
        const $body = $('#body');
        window.addEventListener("resize", () => {
            if ($body.width() >= 1200) {
                if (this.state.width !== 1200) {
                    this.setState({width: 1200})
                }
            }
            else if ($body.width() >= 992) {
                if (this.state.width !== 992) {
                    this.setState({width: 992})
                }
            }
            else if ($body.width() >= 768) {
                if (this.state.width !== 768) {
                    this.setState({width: 768})
                }
            }
            else if ($body.width() >= 576) {
                if (this.state.width !== 576) {
                    this.setState({width: 576})
                }
            }
            else if ($body.width() >= 0) {
                if (this.state.width !== 0) {
                    this.setState({width: 0})
                }
            }
        });

        if ($body.width() >= 1200) {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 323px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 323px)'
            });
        } else if ($body.width() >= 992) {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 339px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 165px)'
            });
        } else {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 300px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 165px)'
            });
        }
    }

    onMailChecked(data) {
        this.props.onMailChecked(data);
    }

    onAllMailSelect() {
        const selectAll = this.props.selectedMails <= this.props.folderMails.length;
        if (selectAll) {
            this.getAllMail();
        } else {
            this.getUnselectedAllMail();
        }
    }

    onStartSelect(data) {
        this.props.onStartSelect(data);
    }

    onImportantSelect(data) {
        this.props.onImportantSelect(data);
    }

    onMailSend(data) {
        this.props.onMailSend(data);
    }

    onMailSelect(mail) {
        this.props.onMailSelect(mail);
        setTimeout(() => {
            this.props.hideMailLoader();
        }, 1500);
    }

    updateSearch(evt) {
        this.props.updateMailSearch(evt.target.value);
        this.props.onSearchMail(evt.target.value)
    }

    onToggleDrawer() {
        this.props.onMailToggleDrawer()
    }

    render() {
        const {selectedMails, loader, currentMail, folderMails, composeMail, user, alertMessage, showMessage, noContentFoundMessage} = this.props;
        console.log(noContentFoundMessage);
        return (

            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-module">

                        <div className="d-block d-xl-none">
                            <Drawer type="temporary"
                                    open={this.props.drawerState}
                                    onClose={this.onToggleDrawer.bind(this)}>
                                {this.MailSideBar()}
                            </Drawer>
                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.MailSideBar()}
                        </div>

                        <div className="module-box">

                            <div className="module-box-header">

                                <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                            onClick={this.onToggleDrawer.bind(this)}>
                                    <i className="zmdi zmdi-menu"/>
                                </IconButton>
                                <SearchBox placeholder="Search mails"
                                           onChange={this.updateSearch.bind(this)}
                                           value={this.props.searchMail}/>

                            </div>

                            <div className="module-box-content">
                                <div className="module-box-topbar">
                                    {this.props.currentMail === null ?
                                        <div>
                                            <Checkbox
                                                indeterminate={selectedMails > 0 && selectedMails < folderMails.length}
                                                checked={selectedMails > 0}
                                                onChange={this.onAllMailSelect.bind(this)}
                                                value="SelectMail"/>

                                            <IconButton style={{marginLeft: -15}}
                                                        onClick={this.onOptionMenuSelect.bind(this)}>
                                                <i className="zmdi zmdi-caret-down"/>
                                            </IconButton>
                                        </div>
                                        :
                                        <IconButton
                                            onClick={() => {
                                                this.props.setCurrentMailNull();
                                            }}>
                                            <i className="zmdi zmdi-arrow-back"/>
                                        </IconButton>
                                    }

                                    <div classID="toolbar-separator"/>

                                    {( selectedMails > 0) && this.getMailActions()}


                                    <Menu id="option-menu"
                                          anchorEl={this.state.anchorEl}
                                          open={this.props.optionMenuState}
                                          onClose={this.handleRequestClose}
                                          style={{maxHeight: ITEM_HEIGHT * 4.5}}
                                          MenuListProps={{
                                              style: {
                                                  width: 150,
                                              },
                                          }}>
                                        {options.map(option =>
                                            <MenuItem key={option.title}
                                                      onClick={this.onOptionMenuItemSelect.bind(this, option)}>
                                                {option.title}
                                            </MenuItem>,
                                        )}
                                    </Menu>

                                    <Menu id="folder-menu"
                                          anchorEl={this.state.anchorEl}
                                          open={this.props.folderMenuState}
                                          onClose={this.handleRequestClose}
                                          style={{maxHeight: ITEM_HEIGHT * 4.5}}
                                          MenuListProps={{
                                              style: {
                                                  width: 150,
                                              },
                                          }}>
                                        {folders.map(folder =>
                                            <MenuItem key={folder.id}
                                                      onClick={this.onFolderMenuItemSelect.bind(this, folder.id)}>
                                                {folder.title}
                                            </MenuItem>,
                                        )}
                                    </Menu>
                                    <Menu id="label-menu"
                                          anchorEl={this.state.anchorEl}
                                          open={this.props.labelMenuState}
                                          onClose={this.handleRequestClose}
                                          style={{maxHeight: ITEM_HEIGHT * 4.5}}
                                          MenuListProps={{
                                              style: {
                                                  width: 150,
                                              },
                                          }}>
                                        {labels.map(label =>
                                            <MenuItem key={label.id}
                                                      onClick={this.onLabelMenuItemSelect.bind(this, label)}>
                                                {label.title}
                                            </MenuItem>,
                                        )}
                                    </Menu>
                                </div>

                                {loader ?
                                    <div
                                        className="module-list-scroll d-flex justify-content-center align-items-center ">
                                        <CircularProgress/>
                                    </div> : this.displayMail(currentMail, folderMails, noContentFoundMessage)}

                                <ComposeMail open={composeMail} user={user}
                                             onClose={this.handleRequestClose.bind(this)}
                                             onMailSend={this.onMailSend.bind(this)}/>

                            </div>
                        </div>
                    </div>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        open={showMessage}
                        autoHideDuration={3000}
                        onClose={this.handleRequestClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{alertMessage}</span>}
                    />
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({mail}) => {
    const {
        searchMail,
        noContentFoundMessage,
        alertMessage,
        showMessage,
        drawerState,
        anchorEl,
        allMail,
        loader,
        currentMail,
        user,
        selectedMails,
        selectedFolder,
        composeMail,
        labelMenuState,
        folderMenuState,
        optionMenuState,
        folderMails
    } = mail;
    return {
        searchMail,
        noContentFoundMessage,
        alertMessage,
        showMessage,
        drawerState,
        anchorEl,
        allMail,
        loader,
        currentMail,
        user,
        selectedMails,
        selectedFolder,
        composeMail,
        labelMenuState,
        folderMenuState,
        optionMenuState,
        folderMails
    }
};


export default connect(mapStateToProps, {
    getAllMail,
    getImportantMail,
    getMailNavFilters,
    getMailNavLabels,
    getNavFolders,
    getReadMail,
    getStarredMail,
    getUnimportantMail,
    getUnreadMail,
    getUnselectedAllMail,
    getUnStarredMail,
    handleMailRequestClose,
    hideMailLoader,
    onAllMailSelect,
    onComposeMail,
    onDeleteMail,
    onFolderMenuItemSelect,
    onFolderSelect,
    onImportantSelect,
    onMailChecked,
    onMailLabelMenuItemSelect,
    onMailLabelSelect,
    onMailOptionMenuSelect,
    onMailSelect,
    onMailSend,
    onMailToggleDrawer,
    onOptionMenuItemSelect,
    onSearchMail,
    onStartSelect,
    setCurrentMailNull,
    updateMailSearch
})(MailWithRedux);