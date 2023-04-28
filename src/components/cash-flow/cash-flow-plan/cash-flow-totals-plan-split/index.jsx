import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../../layouts-table/layout-collapsed-table-bdr';
import data from './../../../../json/cash-flow-general-plan.json';

import { getBudgetPlan } from '../../../../utils/api-requests';

function CashFlowTotalsPlanSplit() {
  // const [projectPlanHours, setProjectPlanHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getBudgetPlan()
  //     .then((data) => {
  //       setProjectPlanHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return <LayoutCollapsedTableBdr data={data} />;
}

export default CashFlowTotalsPlanSplit;
