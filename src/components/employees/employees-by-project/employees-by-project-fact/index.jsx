import React, { useState, useEffect } from 'react';

import { getProjectFactHours } from '../../../../utils/api-requests';
import LayoutTableEmployeesByProject from '../../../layouts-table/layout-table-employess-by-project';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';

function EmployeesByProjectFact() {
  const [projectFactHours, setProjectfactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getProjectFactHours()
      .then((data) => {
        setProjectfactHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setProjectfactHours([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setProjectfactHours([]);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    projectFactHours && (
      <LayoutTableEmployeesByProject
        isLoading={isLoading}
        data={projectFactHours}
        error={error}
        message={message}
        title='Таблица рабочего времени (факт по проектам)'
      />
    )
  );
}

export default EmployeesByProjectFact;
