import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaCompletadasContainer, TarefaCompletada } from "../ListaTarefasCompletadas/styled";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaCompletadas, setListaCompletadas] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    setListaCompletadas([...listaCompletadas, tarefa]);
    
  };
  console.log(listaCompletadas)

  const adicionaTarefaComEnter = (event) => {
    if (event.key === "Enter")
    adicionaTarefa()
 }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={adicionaTarefaComEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaCompletadasContainer>
        <ul>
            {listaCompletadas.map((tarefa, index) => {
              return (
                <TarefaCompletada key={index}
                >
                  <p>{tarefa}</p>
                </TarefaCompletada>
              );
            })}
          </ul>
      </ListaCompletadasContainer>
    </ListaTarefasContainer>
  );
}
