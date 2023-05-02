import React, { useState, useEffect } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-fact.json';

import { getWorkingHoursFact } from '../../../../utils/api-requests';

function EmployeesGeneralFact() {
  const [projectFactHours, setProjectFactHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getWorkingHoursFact()
      .then((data) => {
        setProjectFactHours(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LayoutPlainTable
      data={projectFactHours}
      title='Таблица рабочего времени (общий факт)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralFact;
