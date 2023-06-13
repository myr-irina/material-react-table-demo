import { BASE_URL } from './constants';

export const checkResponse = (res) => {
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
export const getWorkingHoursPlan = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getWorkingHoursFact = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

//by project employees
export const getProjectPlanHours = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/by-projects/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getProjectFactHours = (token) => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/staff/by-projects/fact?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }
  );
};

//by income & cost budget
export const getBudgetPlan = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/bdr/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getBudgetFact = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/bdr/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getBudgetByProjectPlan = (token) => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/bdr/by-projects/plan?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }
  );
};

export const getBudgetByProjectFact = (token) => {
  return requestUrl(
    `${BASE_URL}/api/v1/tables/bdr/by-projects/fact?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }
  );
};

//by cash flow
export const getCashFlowPlan = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/common/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getCashFlowFact = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/common/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getCashFlowByProjectPlan = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/by-projects/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const getCashFlowByProjectFact = (token) => {
  return requestUrl(`${BASE_URL}/api/v1/tables/dds/by-projects/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const login = () => {};
