import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-fact.json';

import { getCashFlowFact } from '../../../../utils/api-requests';

function CashFlowTotalsFact() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getBudgetByProjectPlan()
  //     .then((data) => {
  //       setBudgetPlanByProject(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     })
  //     .finally(setIsLoading(false));
  // }, []);

  return <LayoutFinanceTableTotal data={data} />;
}

export default CashFlowTotalsFact;
