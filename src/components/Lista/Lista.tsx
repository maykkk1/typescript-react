import * as React from 'react';
import style from './Lista.module.scss'
 
const Lista = () => {

    const tarefas = [
        { 
            nome: 'React', 
            tempo: '01:00:00'
        }, 
        {
            nome: 'Javascript',
            tempo: '01:30:00'
        }, 
        {
            nome: 'Docker',
            tempo: '00:30:00'
        }
    ]

    return ( 
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((tarefa, index) => {
                    return(
                        <li className={style.item} key={index}>
                            <h3>{tarefa.nome}</h3>
                            <span>{tarefa.tempo}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
     );
}

export default Lista ;