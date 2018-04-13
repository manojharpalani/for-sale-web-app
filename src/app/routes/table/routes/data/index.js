import React from 'react';
import DataTable from './Components/DataTable';
import CardBox from "components/CardBox/index";

const EnhancedTables = () => {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            <CardBox styleName="col-12" cardStyle="mb-0 p-0" heading="Data Table" headerOutside>
                <DataTable />
            </CardBox>
        </div>
    );
};

export default EnhancedTables;

