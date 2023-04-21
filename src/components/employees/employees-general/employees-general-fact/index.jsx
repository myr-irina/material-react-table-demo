import React, { useState } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-fact.json';

function EmployeesGeneralFact() {
  // const [data, setData] = useState('');

  return (
    <LayoutPlainTable
      data={data}
      title='Таблица рабочего времени (общий факт)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralFact;
