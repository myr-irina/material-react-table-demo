import React, { useState, useMemo, useEffect, useRef } from 'react';
import { getProjectFactHours } from '../../../../utils/api-requests';
import LayoutTableEmployeesByProject from '../../../layouts-table/layout-table-employess-by-project';

function EmployeesByProjectFact2() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjectFactHours()
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

  return (
    projectPlanHours && (
      <LayoutTableEmployeesByProject
        isLoading={isLoading}
        data={projectPlanHours}
      />
    )
  );
}

export default EmployeesByProjectFact2;
