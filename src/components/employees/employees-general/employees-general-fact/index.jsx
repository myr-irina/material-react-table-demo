import React, { useState } from 'react';
import LayoutEmployeesGeneral from '../layout-employees-general';
import data from '../../../../json/employees-general-fact.json';

function EmployeesGeneralFact() {
  // const [data, setData] = useState('');

  return (
    <LayoutEmployeesGeneral
      data={data}
      title='Таблица рабочего времени (общий факт)'
    />
  );
}

export default EmployeesGeneralFact;
