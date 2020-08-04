import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/62582404?s=460&u=29db25e5cdf416891054e2130bb29b59ec824898&v=4" alt="Cleyson Silva"/>
      <div>
        <strong>Cleyson Silva</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br/><br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores odio ratione unde laborum corporis, dolor velit accusamus adipisci distinctio ex, doloribus, dicta beatae impedit soluta illum tempora vel debitis.
    </p>
    <footer>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Entrar em contato"/>
        Entre em contato
      </button>
    </footer>
    </article>
  );
}

export default TeacherItem;