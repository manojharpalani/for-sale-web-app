import React from 'react';
import BasicTable from './basic/BasicTable';
import EnhancedTable from './enhanced/EnhancedTable';
import ContainerHeader from "components/ContainerHeader/index";
import CardBox from "components/CardBox/index";

const Tables = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Tables" match={match} />

            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0" heading="Basic Table" headerOutside>
                    <BasicTable />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12" cardStyle="p-0" heading="Data Table" headerOutside>
                    <EnhancedTable />
                </CardBox>
            </div>
        </div>
    );
};

export default Tables;

