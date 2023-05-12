import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../../layouts-table/layout-collapsed-table-bdr';
import data from './../../../../json/cash-flow-general-plan.json';

import { getCashFlowPlan } from '../../../../utils/api-requests';

function CashFlowTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCashFlowPlan()
      .then((data) => {
        setPlanSplitData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (planSplitData.length === 0) return;

  return <LayoutCollapsedTableBdr isLoading={isLoading} data={planSplitData} />;
}

export default CashFlowTotalsPlanSplit;
