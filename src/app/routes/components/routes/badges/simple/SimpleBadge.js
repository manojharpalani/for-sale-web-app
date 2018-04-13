import React from 'react';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';
import Notification from 'material-ui-icons/NotificationsActive';
import IconButton from 'material-ui/IconButton';

const SimpleBadge = () => {
    return (
        <div className="badge-group">
            <Badge badgeContent={4} color="primary">
                <MailIcon />
            </Badge>
            <IconButton style={{outline: 'none'}}>
                <Badge badgeContent={6} color="accent">
                    <FolderIcon />
                </Badge>
            </IconButton>
            <Badge badgeContent={10} color="primary">
                <Notification/>
            </Badge>
        </div>
    );
};


export default (SimpleBadge);