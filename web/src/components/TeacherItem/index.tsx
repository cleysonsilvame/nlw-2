import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemsProps {
  teacher: Teacher;
}



const TeacherItem: React.FC<TeacherItemsProps> = ({teacher}) => {
  return (
    <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name}/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>
    <p>{teacher.bio}</p>
    <footer>
      <p>
        Preço/Hora
        <strong>R$ {teacher.cost}</strong>
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