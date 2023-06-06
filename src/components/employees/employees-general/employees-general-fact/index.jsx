import React, { useState, useEffect } from 'react';

import LayoutPlainTable from '../../../layouts-table/layout-plain-table';
import { getWorkingHoursFact } from '../../../../utils/api-requests';
import { useAuth } from '../../../../contexts/auth-provider';

function EmployeesGeneralFact() {
  const [projectFactHours, setProjectFactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    getWorkingHoursFact(token)
      .then((data) => {
        setProjectFactHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(message);
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
      message={message}
      title='Таблица рабочего времени (общий факт)'
      header='Сотрудники'
    />
  );
}

export default EmployeesGeneralFact;
