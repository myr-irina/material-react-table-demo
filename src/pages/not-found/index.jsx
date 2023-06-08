import React from 'react';
import './style.css';

function NotFound() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Упс! Ошибка 404</h1>
        <p>Запрашиваемая страница не существует</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default NotFound;
