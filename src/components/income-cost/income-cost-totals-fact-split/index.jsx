import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../json/income-cost-general-fact.json';

import { getBudgetFact } from '../../../utils/api-requests';

function IncomeCostTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetFact()
      .then((data) => {
        setFactSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (factSplitData.length === 0) return;

  return <LayoutCollapsedTableBdr isLoading={isLoading} data={factSplitData} />;
}

export default IncomeCostTotalsFactSplit;
