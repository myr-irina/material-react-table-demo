import React, { useState, useEffect } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-fact.json';

import { getWorkingHoursFact } from '../../../../utils/api-requests';

function EmployeesGeneralFact() {
  const [projectFactHours, setProjectFactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getWorkingHoursFact()
      .then((data) => {
        setProjectFactHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <LayoutPlainTable
      data={projectFactHours}
      isLoading={isLoading}
      title='Таблица рабочего времени (общий факт)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralFact;
