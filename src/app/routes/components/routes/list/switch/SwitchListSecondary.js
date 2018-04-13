import React, {Component} from 'react';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader,} from 'material-ui/List';
import Switch from 'material-ui/Switch';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';

class SwitchListSecondary extends Component {
    state = {
        checked: ['wifi'],
    };

    handleToggle = (event, value) => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <List subheader={<ListSubheader className="position-static">Settings</ListSubheader>}>
                <ListItem>
                    <ListItemIcon>
                       <i className="zmdi zmdi-wifi zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText primary="Wi-Fi" />
                    <ListItemSecondaryAction>
                        <Switch
                            onClick={event => this.handleToggle(event, 'wifi')}
                            checked={this.state.checked.indexOf('wifi') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <i className="zmdi zmdi-bluetooth zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText primary="Bluetooth" />
                    <ListItemSecondaryAction>
                        <Switch
                            onClick={event => this.handleToggle(event, 'bluetooth')}
                            checked={this.state.checked.indexOf('bluetooth') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i className="zmdi zmdi-mic zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText primary="Mic" />
                    <ListItemSecondaryAction>
                        <Switch
                            onClick={event => this.handleToggle(event, 'mic')}
                            checked={this.state.checked.indexOf('mic') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i className="zmdi zmdi-remote-control zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText primary="Remote Control" />
                    <ListItemSecondaryAction>
                        <Switch
                            onClick={event => this.handleToggle(event, 'RemoteControl')}
                            checked={this.state.checked.indexOf('RemoteControl') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        );
    }
}


export default SwitchListSecondary;