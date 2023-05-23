import React, { useState, useEffect } from 'react';
import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import data from '../../../../json/employees-general-plan.json';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';

import { getWorkingHoursPlan } from '../../../../utils/api-requests';

function EmployeesGeneralPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWorkingHoursPlan()
      .then((data) => {
        setProjectPlanHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (projectPlanHours.length === 0) return;

  return (
    projectPlanHours && (
      <LayoutPlainTable
        data={projectPlanHours}
        isLoading={isLoading}
        title='Таблица рабочего времени (общий план)'
        header='Сотрудники'
      />
    )
  );
}

export default EmployeesGeneralPlan;
