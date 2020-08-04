import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
            </label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">
              Dia da semana
            </label>
            <input type="text" id="week_day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">
              Hora
            </label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;