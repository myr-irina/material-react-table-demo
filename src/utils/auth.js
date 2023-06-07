import { BASE_URL } from './constants';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const signin = ({ username, password }) => {
  return fetch(`${BASE_URL}/api/v1/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
      `grant_type=&username=${username}&password=${password}&client_id=&client_secret=`
    ),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/api/user/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const userSignin = async ({ username, password }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify(
      `grant_type=&username=${username}&password=${password}&client_id=&client_secret=`
    ),
  };

  await fetch(`${BASE_URL}/api/v1/token`, requestOptions);
};
