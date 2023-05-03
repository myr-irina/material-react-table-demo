import React, { useMemo } from 'react';

import data from '../../../json/dds-by-project-fact copy.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

function CashFlowFactByProject() {
  return <LayoutCollapsedTableProject data={data} />;
}

export default CashFlowFactByProject;
