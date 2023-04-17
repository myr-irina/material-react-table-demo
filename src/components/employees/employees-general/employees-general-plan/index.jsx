import React, { useState } from 'react';
import LayoutEmployeesGeneral from '../layout-employees-general';
import data from '../../../../json/employees-general-plan.json';

function EmployeesGeneralPlan() {
  // const [data, setData] = useState('');

  return (
    <LayoutEmployeesGeneral
      data={data}
      title='Таблица рабочего времени (общий план)'
    />
  );
}

export default EmployeesGeneralPlan;
