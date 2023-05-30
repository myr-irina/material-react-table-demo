import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-fact.json';

import { getCashFlowFact } from '../../../../utils/api-requests';

function CashFlowTotalsFact() {
  const [totalData, setTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCashFlowFact()
      .then((data) => {
        setTotalData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (totalData.length === 0) return;

  return (
    totalData && (
      <LayoutFinanceTableTotal
        isLoading={isLoading}
        data={totalData}
        title='Таблица ДДС (факт)'
        tableVariant='dds'
      />
    )
  );
}

export default CashFlowTotalsFact;
