import React, { useState, useEffect } from 'react';

import { getProjectPlanHours } from '../../../../utils/api-requests';
import employeesByProjectPlanData from '../../../../json/employees-by-project-plan.json';
import LayoutTableEmployeesByProject from '../../../layouts-table/layout-table-employess-by-project';

function EmployeesByProjectPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProjectPlanHours()
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

  // if (projectPlanHours.length === 0) return;

  return (
    projectPlanHours && (
      <LayoutTableEmployeesByProject
        isLoading={isLoading}
        data={projectPlanHours}
        error={error}
        title='Таблица рабочего времени (план по проектам)'
      />
    )
  );
}

export default EmployeesByProjectPlan;
