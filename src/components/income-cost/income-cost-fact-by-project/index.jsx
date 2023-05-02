import React, { useMemo } from 'react';

import data from '../../../json/bdr-by-project-fact copy.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

function IncomeCostFactByProject() {
  return <LayoutCollapsedTableProject data={data} />;
}

export default IncomeCostFactByProject;
