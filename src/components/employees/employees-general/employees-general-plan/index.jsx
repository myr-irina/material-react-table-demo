import React, { useState, useEffect } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-plan.json';

import { getWorkingHoursPlan } from '../../../../utils/api-requests';

function EmployeesGeneralPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getWorkingHoursPlan()
      .then((data) => {
        setProjectPlanHours(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LayoutPlainTable
      data={projectPlanHours}
      title='Таблица рабочего времени (общий план)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralPlan;
