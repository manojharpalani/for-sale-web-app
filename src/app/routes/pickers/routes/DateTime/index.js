import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import DatePickers from 'app/routes/components/routes/pickers/date/DatePickers';
import TimePickers from 'app/routes/components/routes/pickers/time/TimePickers';
import DateAndTimePickers from 'app/routes/components/routes/pickers/dateTime/DateAndTimePickers';
import CustomDateTimePicker from 'app/routes/components/routes/pickers/customDateTimePicker/CustomDateTimePicker';
import WeekPicker from 'app/routes/components/routes/pickers/weekPicker/WeekPicker';


const DateTime = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Pickers" match={match}
                             description="Pickers provide a simple way to select a single value from a pre-determined set." />
            <div className="row">
                <CardBox styleName="col-lg-4 col-sm-6" heading="Date pickers">
                    <DatePickers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading="Time pickers">
                    <TimePickers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading="Week picker">
                    <WeekPicker />
                </CardBox>
                <CardBox styleName="col-lg-6 col-sm-6" heading="Date & Time pickers">
                    <DateAndTimePickers />
                </CardBox>
                <CardBox styleName="col-lg-6 col-12" heading="Custom Date & Time pickers">
                    <CustomDateTimePicker />
                </CardBox>
            </div>
        </div>
    );
};

export default DateTime;

