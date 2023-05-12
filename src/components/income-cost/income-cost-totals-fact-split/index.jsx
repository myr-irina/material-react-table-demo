import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../json/income-cost-general-fact.json';

import { getBudgetFact } from '../../../utils/api-requests';

function IncomeCostTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBudgetFact()
      .then((data) => {
        setFactSplitData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (factSplitData.length === 0) return;

  return <LayoutCollapsedTableBdr data={factSplitData} />;
}

export default IncomeCostTotalsFactSplit;
