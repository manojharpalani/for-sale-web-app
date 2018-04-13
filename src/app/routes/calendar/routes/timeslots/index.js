import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

const Timeslots = (props) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
        <BigCalendar
            {...props}
            events={events}
            step={15}
            timeslots={8}
            defaultView='week'
            defaultDate={new Date(2015, 3, 12)}
        />
        </div>
    )
};

export default Timeslots;