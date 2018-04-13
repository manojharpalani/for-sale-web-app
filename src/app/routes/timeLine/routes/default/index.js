import React from 'react';
import timeLineData from "../timeLineData";
import DefaultTimeLineItem from "components/timeline/DefaultTimeLineItem";


const Default = () => {
    return (
        <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
            {timeLineData.map((timeLine, index) => <DefaultTimeLineItem key={index}
                                                                        styleName={index % 2 === 0 ? '' : 'timeline-inverted'}
                                                                        timeLine={timeLine} />)}
        </div>
    )
};

export default Default;

