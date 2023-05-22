import React, { useState, useEffect } from 'react';
import LayoutCollapsedTableBdr from '../../../layouts-table/layout-collapsed-table-bdr';
import data from './../../../../json/cash-flow-general-plan.json';
import LayoutFinanceTableDetailed from '../../../layouts-table/layout-finance-table-detailed';
import CashFlowTotalsFact from '../cash-flow-totals-fact';

import { getCashFlowFact } from '../../../../utils/api-requests';
import { categoriesDDS } from '../../../../utils/constants';

function CashFlowTotalsFactSplit2() {
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

  return (
    <>
      <CashFlowTotalsFact />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={factSplitData}
        categories={categoriesDDS}
      />
    </>
  );
}

export default CashFlowTotalsFactSplit2;
