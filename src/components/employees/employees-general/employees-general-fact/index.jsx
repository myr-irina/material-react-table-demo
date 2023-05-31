import React, { useState, useEffect } from 'react';

import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-fact.json';
import { getWorkingHoursFact } from '../../../../utils/api-requests';

function EmployeesGeneralFact() {
  const [projectFactHours, setProjectFactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getWorkingHoursFact()
      .then((data) => {
        setProjectFactHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setIsLoading(false);
          setProjectFactHours([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setProjectFactHours([]);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <LayoutPlainTable
      data={projectFactHours}
      isLoading={isLoading}
      error={error}
      title='Таблица рабочего времени (общий факт)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralFact;
