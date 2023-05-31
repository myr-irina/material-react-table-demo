import React, { useState, useEffect } from 'react';

import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import { getWorkingHoursPlan } from '../../../../utils/api-requests';

function EmployeesGeneralPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getWorkingHoursPlan()
      .then((data) => {
        setProjectPlanHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setIsLoading(false);
          setProjectPlanHours([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setProjectPlanHours([]);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    projectPlanHours && (
      <LayoutPlainTable
        data={projectPlanHours}
        isLoading={isLoading}
        error={error}
        title='Таблица рабочего времени (общий план)'
        header='Сотрудники'
      />
    )
  );
}

export default EmployeesGeneralPlan;
