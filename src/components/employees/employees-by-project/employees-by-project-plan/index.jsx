import React, { useState, useEffect } from 'react';
import { getProjectPlanHours } from '../../../../utils/api-requests';
import LayoutTableEmployeesByProject from '../../../layouts-table/layout-table-employess-by-project';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { useAuth } from '../../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function EmployeesByProjectPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectPlanHours(token)
      .then((data) => {
        setProjectPlanHours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setProjectPlanHours([]);
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setProjectPlanHours([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setProjectPlanHours([]);
        }
      })
      .finally(setIsLoading(false));
  }, []);

  if (!projectPlanHours.length) return;

  return (
    projectPlanHours && (
      <LayoutTableEmployeesByProject
        isLoading={isLoading}
        data={projectPlanHours}
        error={error}
        message={message}
        title="Таблица рабочего времени (план по проектам)"
      />
    )
  );
}

export default EmployeesByProjectPlan;
