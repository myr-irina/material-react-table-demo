import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-fact.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

import { getBudgetFact } from '../../../utils/api-requests';

function IncomeCostTotalsFact() {
  // const [budgetFact, setBudgetFact] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getBudgetFact()
  //     .then((data) => {
  //       console.log({ data });
  //       setBudgetFact(data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  return <LayoutFinanceTableTotal data={data} />;
}

export default IncomeCostTotalsFact;
