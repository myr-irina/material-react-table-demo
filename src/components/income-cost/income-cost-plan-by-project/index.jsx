import React, { useMemo } from 'react';

import data from '../../../json/bdr-by-project-plan copy.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

function IncomeCostPlanByProject() {
  return <LayoutCollapsedTableProject title='Проекты' data={data} />;
}

export default IncomeCostPlanByProject;
