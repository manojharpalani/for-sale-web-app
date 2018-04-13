import React from 'react';
import timeLineData from "../timeLineData";
import ZigzagTimeLineItem from "components/timeline/ZigzagTimeLineItem";


const Zigzag = () => {
    return (
        <div
            className="timeline-section timeline-center timeline-zigzag clearfix animated slideInUpTiny animation-duration-3">
            {timeLineData.map((timeLine, index) => <ZigzagTimeLineItem key={index}
                                                                       styleName={index % 2 === 0 ? '' : 'timeline-inverted'}
                                                                       timeLine={timeLine} />)}
        </div>
    )
};

export default Zigzag;

