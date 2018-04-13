import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import DatePickers from './date/DatePickers';
import TimePickers from './time/TimePickers';
import DateAndTimePickers from './dateTime/DateAndTimePickers';
import CustomDateTimePicker from './customDateTimePicker/CustomDateTimePicker';
import WeekPicker from './weekPicker/WeekPicker';


const Pickers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Pickers" match={match} />
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

export default Pickers;

