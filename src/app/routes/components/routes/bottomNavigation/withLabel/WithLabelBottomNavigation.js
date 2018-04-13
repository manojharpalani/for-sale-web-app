import React, {Component} from 'react';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

class WithLabelBottomNavigation extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} showLabels
                              className={'flex-wrap bottom-navigation'}>
                <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    }
}

export default WithLabelBottomNavigation;