import React from "react";

function Lista() {

    const tarefas = [{
        tarefa: 'React',
          tempo: '02:00:00'
      }, {
        tarefa: 'Javascript',
          tempo: '01:00:00'
      }]

      // arrey com lista de linguagem com tempo de estudo
  return (
    <aside>
      {tarefas.map((item, index) => (
        // item se refere a tarefa, a do const não da lista 
        <li>
          <h3>{item.tarefa}</h3>
          {/* Aqui no "h3" vai trazer todas as tarefas */}
          {/* Aqui vai ser tipo um foreach */}
          <span>{item.tempo}</span>
          {/* Aqui tmb sera a mesma coisa */}
        </li>
      ))}
    </aside>
  );
}

export default Lista;
