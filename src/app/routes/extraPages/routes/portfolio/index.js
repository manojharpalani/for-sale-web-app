import React from 'react';
import ContainerHeader from 'components/ContainerHeader';

const Portfolio = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="filter-with-bg-color text-center">
                <ContainerHeader
                    styleName="text-center"
                    title="Our Clients" match={match}
                    description="You can easily integrate this with all of the popular PHP/MySQL based frameworks"
                />

                <ul className="list-inline">
                    <li>
                        <a href="javascript:void(0)">All</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">graphic design</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">logo</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">mobile app</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">web</a>
                    </li>
                </ul>
            </div>

            <div className="portfolio-section">
                <div className="row">
                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

