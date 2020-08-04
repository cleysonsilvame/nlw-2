import React from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
            </label>
            <input type="text" id="subject"/>
          </div>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherList;