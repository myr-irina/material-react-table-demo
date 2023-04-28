import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr/index';
import data from '../../../json/cash-flow-general-plan.json';
import { getBudgetPlan } from '../../../utils/api-requests';

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

  // console.log({ projectPlanHours });

  return <LayoutCollapsedTableBdr data={data} />;
}

export default CashFlowTotalsPlanSplit;
