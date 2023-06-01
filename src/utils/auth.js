import { BASE_URL } from './constants';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const signin = (userData) => {
  return fetch(`${BASE_URL}/api/v1/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
    }),
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    //credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Ошибка: ${res.status}`);
      }
    })
    .then((data) => data);
};
