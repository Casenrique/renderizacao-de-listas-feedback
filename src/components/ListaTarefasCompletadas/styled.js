import styled from "styled-components";

export const ListaCompletadasContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const TarefaCompletada = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  color: grey; 
  text-decoration: line-through;
  padding: 6px 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
`;

