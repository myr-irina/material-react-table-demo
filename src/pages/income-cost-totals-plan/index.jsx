import React from 'react';
import IncomeCostTotalsPlan from '../../components/income-cost/income-cost-totals-plan';
import IncomeCostTotalsPlanSplit from '../../components/income-cost/income-cost-totals-plan-split';

function IncomeCostByProjectPlanPage() {
  return (
    <>
      <IncomeCostTotalsPlan />
      <IncomeCostTotalsPlanSplit />
    </>
  );
}

export default IncomeCostByProjectPlanPage;
