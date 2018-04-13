import React, {Component} from 'react';
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import 'jquery-slimscroll/jquery.slimscroll.min';
import filters from "../data/filters";
import labels from "../data/labels";
import options from "../data/options";
import ToDoList from "components/todo/ToDoList";
import ToDoDetail from "components/todo/ToDoDetail/index";
import SearchBox from "components/SearchBox/index";
import {CircularProgress} from 'material-ui/Progress';
import {
    getAllTodo,
    getImportantToDo,
    getNavFilters,
    getNavLabels,
    getStarredToDo,
    getUnimportantToDo,
    getUnselectedAllTodo,
    getUnStarredTodo,
    handleToDoMenuRequestClose,
    hideToDoLoader,
    onDeleteToDo,
    onLabelMenuItemSelect,
    onLabelSelect,
    onLabelUpdate,
    onOptionMenuSelect,
    onSearchTodo,
    onSortEnd,
    onTodoAdd,
    onTodoChecked,
    onTodoSelect,
    onToDoUpdate,
    selectAllTodo,
    setCurrentToDoNull,
    toDoToggleDrawer,
    updateSearch
} from 'actions/ToDo';

const ITEM_HEIGHT = 34;

class ToDoWithRedux extends Component {
    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.onSortEnd({oldIndex, newIndex});
    };
    onLabelSelect = event => {
        this.props.onLabelSelect();
        this.setState({
            anchorEl: event.currentTarget,
        })
    };
    onOptionMenuSelect = event => {
        this.props.onOptionMenuSelect();
        this.setState({
            anchorEl: event.currentTarget,
        })
    };
    handleRequestClose = event => {
        this.props.handleToDoMenuRequestClose();
    };

    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.props.handleToDoMenuRequestClose();
                this.props.selectAllTodo();
                break;
            case 'None':
                this.props.handleToDoMenuRequestClose();
                this.props.getUnselectedAllTodo();
                break;
            case 'Starred':
                this.props.handleToDoMenuRequestClose();
                this.props.getStarredToDo();
                break;
            case 'Unstarred':
                this.props.handleToDoMenuRequestClose();
                this.props.getUnStarredTodo();
                break;
            case 'Important':
                this.props.handleToDoMenuRequestClose();
                this.props.getImportantToDo();
                break;
            case 'Unimportant':
                this.props.handleToDoMenuRequestClose();
                this.props.getUnimportantToDo();
                break;
        }
    };
    onLabelMenuItemSelect = (label) => {
        this.props.handleToDoMenuRequestClose();
        this.props.onLabelMenuItemSelect(label);

    };
    onLabelUpdate = (data, label) => {
        this.props.handleToDoMenuRequestClose();
        this.props.onLabelUpdate({data, label});
    };
    onToDoUpdate = (data) => {
        this.props.handleToDoMenuRequestClose();
        this.props.onToDoUpdate(data);
    };


    onDeleteToDo = (data) => {
        this.props.onDeleteToDo(data);
    };

    onSearchTodo = (searchText) => {
        this.props.onSearchTodo(searchText);
    };

    onTodoChecked = (data) => {
        this.props.onTodoChecked(data);
    };

    onAllTodoSelect = () => {
        const selectAll = this.props.selectedToDos < this.props.toDos.length;
        if (selectAll) {
            this.props.selectAllTodo();
        } else {
            this.props.getUnselectedAllTodo();
        }
    };

    onTodoAdd = (data) => {
        this.props.onTodoAdd(data);
    };

    onTodoSelect = (todo) => {
        this.props.onTodoSelect(todo);
        setTimeout(() => {
            this.props.hideToDoLoader();
        }, 1500);
    };

    removeLabel = (todo, label) => {
        todo.labels.splice(todo.labels.indexOf(label), 1);
        return todo.labels;
    };

    addLabel = (todo, label) => {
        todo.labels = todo.labels.concat(label);
        return todo.labels
    };

    onToggleDrawer = () => {
        this.props.toDoToggleDrawer();
    };

    updateSearch = (evt) => {
        this.props.updateSearch(evt.target.value);
        this.onSearchTodo(evt.target.value)
    };
    getNavFilters = () => {
        return filters.map((filter, index) =>
            <li key={index} onClick={() => {
                this.props.getNavFilters(filter);
                setTimeout(() => {
                    this.props.hideToDoLoader();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={filter.id === this.props.selectedSectionId ? 'active' : ''}>
                    <i className={`zmdi zmdi-${filter.icon}`}/>
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };
    getNavLabels = () => {
        return labels.map((label, index) =>
            <li key={index} onClick={() => {
                this.props.getNavLabels(label);
                setTimeout(() => {
                    this.props.hideToDoLoader();
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
    ToDoSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo mb-4">
                    <i className="zmdi zmdi-email mr-4"/>
                    <span>To-Do</span>
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
                        <Button raised color="primary" className="btn btn-primary btn-block" onClick={() => {
                            this.setState({addTodo: true})
                        }}> ADD TASK </Button>
                    </div>
                    <ul className="module-nav">

                        <li onClick={() => {
                            this.props.getAllTodo();
                        }
                        }>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-menu"/>
                                <span>All</span>
                            </a>
                        </li>

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
    showToDos = ({currentTodo, toDos, conversation, user}) => {
        return currentTodo === null ?
            <ToDoList toDos={toDos} onSortEnd={this.onSortEnd}
                      onTodoSelect={this.onTodoSelect.bind(this)}
                      onTodoChecked={this.onTodoChecked.bind(this)} useDragHandle={true}/>
            :
            <ToDoDetail todo={currentTodo} user={user}
                        conversation={conversation}
                        onLabelUpdate={this.onLabelUpdate.bind(this)}
                        onToDoUpdate={this.onToDoUpdate.bind(this)}
                        onDeleteToDo={this.onDeleteToDo.bind(this)}/>;
    };

    constructor() {
        super();
        this.state = {
            width: 1200,
            anchorEl: null
        }
    }

    componentDidMount() {
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
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 321px)'
            });
            if (this.props.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 321px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 382px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 323px)'
            });
        } else if ($body.width() >= 992) {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 335px)'
            });
            if (this.props.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 335px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 394px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 165px)'
            });
        } else {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 300px)'
            });
            if (this.props.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 300px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 360px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 165px)'
            });
        }
    }


    render() {
        const {selectedToDos, loader, currentTodo, toDos, conversation, user, alertMessage, showMessage} = this.props;

        return (
            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-module">
                        <div className="d-block d-xl-none">
                            <Drawer type="temporary"
                                    open={this.props.drawerState}
                                    onClose={this.onToggleDrawer.bind(this)}>
                                {this.ToDoSideBar()}
                            </Drawer>
                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.ToDoSideBar()}
                        </div>

                        <div className="module-box">
                            <div className="module-box-header">

                                <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                            onClick={this.onToggleDrawer.bind(this)}>
                                    <i className="zmdi zmdi-menu"/>
                                </IconButton>
                                <SearchBox placeholder="Search To Do"
                                           onChange={this.updateSearch.bind(this)}
                                           value={this.props.searchTodo}/>
                            </div>
                            <div className="module-box-content">
                                {this.props.currentTodo === null ?
                                    <div className="module-box-topbar">
                                        <Checkbox
                                            indeterminate={selectedToDos > 0 && selectedToDos < toDos.length}
                                            checked={selectedToDos > 0}
                                            onChange={this.onAllTodoSelect.bind(this)}
                                            value="SelectMail"/>

                                        <IconButton style={{marginLeft: -15}}
                                                    onClick={this.onOptionMenuSelect.bind(this)}>
                                            <i className="zmdi zmdi-caret-down"/>
                                        </IconButton>

                                        <div classID="toolbar-separator"></div>

                                        {( selectedToDos > 0) &&
                                        <IconButton
                                            onClick={this.onLabelSelect.bind(this)}>
                                            <i className="zmdi zmdi-label-alt"/>
                                        </IconButton>}
                                    </div>
                                    :
                                    <div className="module-box-topbar">
                                        <IconButton
                                            onClick={() => {
                                                this.props.setCurrentToDoNull();
                                            }}>
                                            <i className="zmdi zmdi-arrow-back"/>
                                        </IconButton>
                                    </div>
                                }


                                <Menu id="option-menu"
                                      anchorEl={this.state.anchorEl}
                                      open={this.props.optionMenuState}
                                      onClose={this.props.handleToDoMenuRequestClose}
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

                                <Menu id="label-menu"
                                      anchorEl={this.state.anchorEl}
                                      open={this.props.labelMenuState}
                                      onClose={this.props.handleToDoMenuRequestClose}
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

                                {loader ?
                                    <div
                                        className="loader-view-block">
                                        <div className="loader-view">
                                            <CircularProgress/>
                                        </div>
                                    </div> :
                                    this.showToDos(this.props)
                                }
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

const mapStateToProps = ({toDo}) => {
    const {
        searchTodo,
        alertMessage,
        loader,
        showMessage,
        drawerState,
        allToDos,
        currentTodo,
        user,
        selectedToDos,
        labelMenuState,
        optionMenuState,
        toDos,
        filter,
        todoConversation,
        conversation
    } = toDo;
    return {
        searchTodo,
        alertMessage,
        loader,
        showMessage,
        drawerState,
        allToDos,
        currentTodo,
        user,
        selectedToDos,
        labelMenuState,
        optionMenuState,
        toDos,
        filter,
        todoConversation,
        conversation
    }
};


export default connect(mapStateToProps, {
    getAllTodo,
    getImportantToDo,
    getNavFilters,
    getNavLabels,
    getStarredToDo,
    getUnimportantToDo,
    getUnselectedAllTodo,
    getUnStarredTodo,
    handleToDoMenuRequestClose,
    hideToDoLoader,
    onDeleteToDo,
    onLabelMenuItemSelect,
    onLabelSelect,
    onLabelUpdate,
    onOptionMenuSelect,
    onSearchTodo,
    onSortEnd,
    onTodoAdd,
    onTodoChecked,
    onTodoSelect,
    onToDoUpdate,
    selectAllTodo,
    setCurrentToDoNull,
    toDoToggleDrawer,
    updateSearch
})(ToDoWithRedux);