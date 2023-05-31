import React, { useMemo, useEffect, useState } from 'react';

import data from '../../../json/dds-by-project-plan.json';

import { getCashFlowByProjectFact } from '../../../utils/api-requests';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project-dds';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';

function CashFlowFactByProject() {
  const [cashFlowFactByProject, setCashFlowFactFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getCashFlowByProjectFact()
      .then((data) => {
        setCashFlowFactFactByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setCashFlowFactFactByProject([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setCashFlowFactFactByProject([]);
      })
      .finally(setIsLoading(false));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data?.[0]?.[0]?.projectType;
        },
        id: 'costType',
        header: 'Проекты',
      },
    ],
    []
  );

  if (cashFlowFactByProject.length === 0) return;

  return (
    <LayoutFinanceTableByProject
      isLoading={isLoading}
      columns={columns}
      data={cashFlowFactByProject}
      error={error}
      message={message}
      title='Таблица ДДС (факт по проектам)'
    />
  );
}

export default CashFlowFactByProject;
