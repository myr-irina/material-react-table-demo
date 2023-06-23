import React, { useState, useEffect } from 'react';

import { getProjectFactHours } from '../../../../utils/api-requests';
import LayoutTableEmployeesByProject from '../../../layouts-table/layout-table-employess-by-project';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { useAuth } from '../../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function EmployeesByProjectFact() {
  const [projectFactHours, setProjectfactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectFactHours(token)
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
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setProjectfactHours([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setProjectfactHours([]);
        }
      })
      .finally(setIsLoading(false));
  }, []);

  if (!projectFactHours.length) return;

  return (
    projectFactHours && (
      <LayoutTableEmployeesByProject
        isLoading={isLoading}
        data={projectFactHours}
        error={error}
        message={message}
        title="Таблица рабочего времени (факт по проектам)"
      />
    )
  );
}

export default EmployeesByProjectFact;
