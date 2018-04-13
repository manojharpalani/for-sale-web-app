import React, {Component} from 'react';
import ContactCell from './ContactCell/index'
import contacts from "app/routes/contact/data/contactList";
import {arrayMove, SortableContainer} from 'react-sortable-hoc';

const Contacts = SortableContainer(({contacts}) => {
    return (
            <div className="row">
                {contacts.map((contact, index) => (
                    <ContactCell key={index} index={index} contact={contact} />
                ))}
            </div>
    );
});


class DragNDrop extends Component {

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            contacts: arrayMove(this.state.contacts, oldIndex, newIndex),
        });
    };

    constructor() {
        super();
        this.state = {
            contacts: contacts,
        }
    }

    render() {
        const {contacts} = this.state;
        return (
            <div className="animated slideInUpTiny animation-duration-3">
                <Contacts contacts={contacts} onSortEnd={this.onSortEnd} useDragHandle={true} />
            </div>
        )
    }
}

export default DragNDrop
