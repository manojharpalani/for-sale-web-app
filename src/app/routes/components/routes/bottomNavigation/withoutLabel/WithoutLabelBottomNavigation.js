import React, {Component} from 'react';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

class WithoutLabelBottomNavigation extends Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange}
                              className={'flex-wrap bottom-navigation'}>
                <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    }
}

export default WithoutLabelBottomNavigation;