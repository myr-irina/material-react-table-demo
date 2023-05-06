import React, { useMemo } from 'react';

import data from '../../../json/dds-by-project-plan.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

function CashFlowPlanByProject() {
  return <LayoutCollapsedTableProject data={data} />;
}

export default CashFlowPlanByProject;
