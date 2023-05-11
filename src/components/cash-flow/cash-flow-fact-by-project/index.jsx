import React, { useMemo } from 'react';

import data from '../../../json/dds-by-project-fact.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

function CashFlowFactByProject() {
  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data?.[0]?.[0]?.projectType;
        },
        id: 'costType',
        header: 'Проекты',
        muiTableHeadCellProps: {
          align: 'left',
        },
      },
    ],
    []
  );
  return <LayoutCollapsedTableProject columns={columns} data={data} />;
}

export default CashFlowFactByProject;
