export const BASE_URL = 'http://10.10.10.131:8000';

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function requestUrl(url, options) {
  return fetch(url, options).then(checkResponse);
}

//general
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

//by project
export const getProjectPlanHours = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/by-projects/plan`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getProjectFactHours = () => {
  return requestUrl(`${BASE_URL}/api/v1/tables/staff/by-projects/fact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
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
