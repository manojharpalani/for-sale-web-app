import React, {Component} from 'react';
import {connect} from 'react-redux'
import Button from "material-ui/Button";
import Drawer from 'material-ui/Drawer';
import {CircularProgress} from 'material-ui/Progress';
import 'jquery-slimscroll/jquery.slimscroll.min';
import IconButton from 'material-ui/IconButton'
import Input from 'material-ui/Input'
import ChatUserList from "components/chatPanel/ChatUserList/ChatUserList";
import Conversation from "components/chatPanel/ChatUserList/Conversation/index";
import ContactList from "components/chatPanel/ChatUserList/ContactList/index";
import SearchBox from "components/SearchBox";
import {
    filterContacts,
    filterUsers,
    hideLoader,
    onChatToggleDrawer,
    onSelectUser,
    submitComment,
    updateMessageValue,
    updateSearchChatUser,
    userInfoState
} from 'actions/Chat'

class ChatPanelWithRedux extends Component {
    filterContacts = (userName) => {
        this.props.filterContacts(userName);
    };
    filterUsers = (userName) => {
        this.props.filterUsers(userName);
    };
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.submitComment();
        }
    };

    onSelectUser = (user) => {
        this.props.onSelectUser(user);

        setTimeout(() => {
            this.props.hideLoader();
        }, 1500);
    };


    submitComment = () => {
        if (this.props.message !== "") {
            this.props.submitComment();
        }
    };

    updateMessageValue = (evt) => {
        this.props.updateMessageValue(evt.target.value);

    };

    Communication = () => {
        const {message, selectedUser, conversation} = this.props;
        const {conversationData} = conversation;
        return <div className="chat-main">
            <div className="chat-main-header">
                <IconButton className="d-block d-xl-none chat-btn" aria-label="Menu"
                            onClick={this.onChatToggleDrawer.bind(this)}>
                    <i className="zmdi zmdi-comment-text"/>
                </IconButton>
                <div className="chat-main-header-info">

                    <div className="chat-avatar mr-2">
                        <div className="chat-avatar-mode">
                            <img src={selectedUser.thumb}
                                 className="rounded-circle size-60"
                                 alt=""/>

                            <span className={`chat-mode ${selectedUser.status}`}/>
                        </div>
                    </div>

                    <div className="chat-contact-name">
                        {selectedUser.name}
                    </div>
                </div>

            </div>

            <div className="chat-list-scroll">
                <Conversation conversationData={conversationData}
                              selectedUser={selectedUser}/>
            </div>

            <div className="chat-main-footer">
                <div className="d-flex flex-row align-items-center" style={{maxHeight: 51}}>
                    <div className="col">
                        <div className="form-group">
                            <textarea
                                id="required" className="border-0 form-control chat-textarea"
                                onKeyUp={this._handleKeyPress.bind(this)}
                                onChange={this.updateMessageValue.bind(this)}
                                value={message}
                                placeholder="Type and hit enter to send message"
                            />
                        </div>
                    </div>
                    <div className="chat-sent">
                        <IconButton
                            onClick={this.submitComment.bind(this)}
                            aria-label="Send message">
                            <i className="zmdi  zmdi-mail-send"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    };

    AppUsersInfo = () => {
        return <div className="chat-sidenav-main">
            <div className=" bg-primary chat-sidenav-header">

                <div className="chat-user-hd">
                    <IconButton className="back-to-chats-button" aria-label="back button"
                                onClick={() => {
                                    this.props.userInfoState(1);
                                }}>
                        <i className="zmdi zmdi-arrow-back text-white"/>
                    </IconButton>
                </div>
                <div className="chat-user chat-user-center">
                    <div className="chat-avatar">
                        <img src="http://via.placeholder.com/256x256"
                             className="avatar rounded-circle size-60 huge" alt="John Doe"/>
                    </div>

                    <div className="user-name h4 my-2 text-white">Robert Johnson</div>

                </div>
            </div>
            <div className="chat-sidenav-content">

                <div className="chat-sidenav-scroll card p-4">
                    <form>
                        <div className="form-group mt-4">
                            <label>Mood</label>

                            <Input
                                fullWidth
                                id="exampleTextarea"
                                multiline
                                rows={3}
                                onKeyUp={this._handleKeyPress.bind(this)}
                                onChange={this.updateMessageValue.bind(this)}
                                defaultValue="it's a status....not your diary..."
                                placeholder="Status"
                                margin="normal"/>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    };
    ChatUsers = () => {
        return <div className="chat-sidenav-main">
            <div className="chat-sidenav-header">

                <div className="chat-user-hd">

                    <div className="chat-avatar" onClick={() => {
                        this.props.userInfoState(2);
                    }}>
                        <div className="chat-avatar-mode">
                            <img id="user-avatar-button" src="http://via.placeholder.com/256x256"
                                 className="rounded-circle size-50"
                                 alt=""/>
                            <span className="chat-mode online"/>
                        </div>
                    </div>

                    <IconButton>
                        <i className="zmdi zmdi-more-vert"/>
                    </IconButton>
                </div>

                <div className="search-wrapper">

                    <SearchBox placeholder="Search or start new chat"
                               onChange={this.updateSearchChatUser.bind(this)}
                               value={this.props.searchChatUser}/>

                </div>
            </div>

            <div className="chat-sidenav-content">
                <div className="chat-sidenav-scroll">
                    <div className="chat-sidenav-title">Chat User</div>
                    {this.props.chatUsers.length === 0 ?
                        <div className="pl-3">{this.props.userNotFound}</div>
                        :
                        <ChatUserList chatUsers={this.props.chatUsers}
                                      selectedSectionId={this.props.selectedSectionId}
                                      onSelectUser={this.onSelectUser.bind(this)}/>
                    }
                    <div className="chat-sidenav-title">Contacts</div>
                    {this.props.contactList.length === 0 ?
                        <div className="pl-3">{this.props.userNotFound}</div>
                        :
                        <ContactList contactList={this.props.contactList}
                                     selectedSectionId={this.props.selectedSectionId}
                                     onSelectUser={this.onSelectUser.bind(this)}/>
                    }
                </div>
            </div>
        </div>
    };
    showCommunication = () => {
        return (
            <div className="chat-box">
                <div className="chat-box-main">{
                    this.props.selectedUser === null ?
                        <div className="loader-view">
                            <i className="zmdi zmdi-comment s-128 text-muted"/>
                            <h1 className="text-muted"> Select User to start Chat</h1>
                            <Button className="d-block d-xl-none" color="primary"
                                    onClick={this.onChatToggleDrawer.bind(this)}>Select contact to start
                                Chat</Button>
                        </div>
                        : this.Communication()}
                </div>
            </div>)
    };

    constructor() {
        super();
        this.state = {
            width: 1200,
        }
    }

    componentDidUpdate() {
        this.manageHeight()
    }

    componentDidMount() {
        this.manageHeight()
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

        if ($("body").width() >= 1200) {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 290px)'
            });
            $('.chat-list-scroll').slimscroll({
                height: 'calc(100vh - 346px)'
            });

            if (this.props.userState === 1) {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 297px)'
                });
            } else {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 361px)'
                });
            }
        } else {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 120px)'
            });
            $('.chat-list-scroll').slimscroll({
                height: 'calc(100vh - 255px)'
            });

            if (this.props.userState === 1) {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 127px)'
                });
            } else {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 187px)'
                });
            }
        }
    }

    updateSearchChatUser(evt) {
        this.props.updateSearchChatUser(evt.target.value);
        this.props.filterContacts(evt.target.value);
        this.props.filterUsers(evt.target.value);
    }

    onChatToggleDrawer() {
        this.props.onChatToggleDrawer();
    }

    render() {
        const {loader, userState, drawerState, selectedUser} = this.props;
        return (
            <div className="app-wrapper app-wrapper-module">
                <div className="app-module chat-module animated slideInUpTiny animation-duration-3">
                    <div className="chat-module-box">
                        <div className="d-block d-xl-none">
                            <Drawer className="app-module-sidenav"
                                    type="temporary"
                                    open={drawerState}
                                    onClose={this.onChatToggleDrawer.bind(this)}>
                                {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
                            </Drawer>
                        </div>
                        <div className="chat-sidenav d-none d-xl-flex">
                            {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
                        </div>
                        {loader ?
                            <div className="w-100 d-flex justify-content-center align-items-center chat-loader-view">
                                <CircularProgress/>
                            </div> : this.showCommunication()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({chatData}) => {
    const {
        loader,
        userNotFound,
        drawerState,
        selectedSectionId,
        userState,
        searchChatUser,
        contactList,
        selectedUser,
        message,
        chatUsers,
        conversationList,
        conversation
    } = chatData;
    return {
        loader,
        userNotFound,
        drawerState,
        selectedSectionId,
        userState,
        searchChatUser,
        contactList,
        selectedUser,
        message,
        chatUsers,
        conversationList,
        conversation
    }
};

export default connect(mapStateToProps, {
    filterContacts,
    filterUsers,
    onSelectUser,
    hideLoader,
    userInfoState,
    submitComment,
    updateMessageValue,
    updateSearchChatUser,
    onChatToggleDrawer
})(ChatPanelWithRedux);