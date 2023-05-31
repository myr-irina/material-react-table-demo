import React, { useState, useEffect } from 'react';

import data from '../../../../json/cash-flow-general-plan.json';
import LayoutFinanceTableDetailed from '../../../layouts-table/layout-finance-table-detailed';

import { getCashFlowPlan } from '../../../../utils/api-requests';
import CashFlowTotalsPlan from '../cash-flow-totals-plan';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { categoriesDDS } from '../../../../utils/constants';

function CashFlowTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getCashFlowPlan()
      .then((data) => {
        setPlanSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setPlanSplitData([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setPlanSplitData([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (planSplitData.length === 0) return;

  return (
    <>
      <CashFlowTotalsPlan />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={planSplitData}
        categories={categoriesDDS}
        error={error}
        message={message} 
      />
    </>
  );
}

export default CashFlowTotalsPlanSplit;
