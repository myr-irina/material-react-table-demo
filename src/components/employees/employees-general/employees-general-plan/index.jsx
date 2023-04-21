import React, { useState } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-plan.json';

function EmployeesGeneralPlan() {
  // const [data, setData] = useState('');

  return (
    <LayoutPlainTable
      data={data}
      title='Таблица рабочего времени (общий план)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralPlan;
