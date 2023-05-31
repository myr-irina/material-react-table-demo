export const BASE_URL = 'http://10.10.10.83:8000';

export const checkResponse = (res) => {
  // return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
};

async function requestUrl(url, options) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

//general employees
export const getWorkingHoursPlan = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getWorkingHoursFact = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//by project employees
export const getProjectPlanHours = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/by-projects/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getProjectFactHours = () => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/staff/by-projects/fact?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

//by income & cost budget
export const getBudgetPlan = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/bdr/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getBudgetFact = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/bdr/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getBudgetByProjectPlan = () => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/bdr/by-projects/plan?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const getBudgetByProjectFact = () => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/bdr/by-projects/fact?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

//by cash flow
export const getCashFlowPlan = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCashFlowFact = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCashFlowByProjectPlan = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/by-projects/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCashFlowByProjectFact = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/by-projects/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
