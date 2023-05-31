import React, { useMemo, useEffect, useState } from 'react';

import data from '../../../json/dds-by-project-plan.json';

import { getCashFlowByProjectPlan } from '../../../utils/api-requests';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project-dds';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';

function CashFlowPlanByProject() {
  const [cashFlowPlanByProject, setCashFlowPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getCashFlowByProjectPlan()
      .then((data) => {
        setCashFlowPlanByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setCashFlowPlanByProject([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setCashFlowPlanByProject([]);
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

  if (cashFlowPlanByProject.length === 0) return;

  return (
    <LayoutFinanceTableByProject
      isLoading={isLoading}
      columns={columns}
      data={cashFlowPlanByProject}
      error={error}
      message={message}
      title='Таблица ДДС (план по проектам)'
    />
  );
}

export default CashFlowPlanByProject;
