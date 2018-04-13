import React from 'react';
import timeLineData from "../timeLineData";
import DefaultTimeLineItem from "components/timeline/DefaultTimeLineItem";


const LeftAligned = () => {
    return (
        <div className="timeline-section clearfix animated slideInUpTiny animation-duration-3">
            {timeLineData.map((timeLine, index) => <DefaultTimeLineItem key={index} timeLine={timeLine}/>)}
        </div>
    )
};

export default LeftAligned;

