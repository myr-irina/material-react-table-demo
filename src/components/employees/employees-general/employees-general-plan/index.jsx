import React, { useState, useEffect } from 'react';

import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import { getWorkingHoursPlan } from '../../../../utils/api-requests';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { Typography } from '@mui/material';

import { useAuth } from '../../../../contexts/auth-provider';

function EmployeesGeneralPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = React.useState(null);

  const { token } = useAuth();

  console.log({ projectPlanHours });

  useEffect(() => {
    getWorkingHoursPlan(token)
      .then((data) => {
        console.log({ data });
        if (data) {
          setProjectPlanHours(data);
        }
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setProjectPlanHours([]);
          setMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(error);
        setError(true);
        setProjectPlanHours([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!projectPlanHours)
    return (
      <Typography>Идет загруза. Обновите, пожалуйста, страницу</Typography>
    );

  return (
    projectPlanHours && (
      <LayoutPlainTable
        data={projectPlanHours}
        isLoading={isLoading}
        error={error}
        message={message}
        title='Таблица рабочего времени (общий план)'
        header='Сотрудники'
      />
    )
  );
}

export default EmployeesGeneralPlan;
