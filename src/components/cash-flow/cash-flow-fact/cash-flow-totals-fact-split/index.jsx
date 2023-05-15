import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../../json/cash-flow-general-fact.json';

import { getCashFlowFact } from '../../../../utils/api-requests';

function CashFlowTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCashFlowFact()
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

export default CashFlowTotalsFactSplit;
