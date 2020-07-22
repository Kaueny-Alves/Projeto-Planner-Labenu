import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./Components/TaskForm";
import styled from "styled-components";
import PlannerDay from "./Components/PlannerDay";

const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 32px;
`;

export const apiUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kaueny";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = async (taskId) => {
    if (window.confirm("Tem certeza que deseja apagar esta tarefa?")) {
      await axios
        .delete(`${apiUrl}/${taskId}`)
        .then(() => {
          getTasks();
        })
        .catch((error) => {
          console.log(error);
          alert("Não foi possível apagar a tarefa!");
        });
    }
  };

  const filterTasksByDay = (day) => {
    return tasks.filter((task) => {
      return task.day === day;
    });
  };

  return (
    <div>
      <TaskForm updateTasks={getTasks} />
      <PlannerContainer>
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Segunda"}
          tasks={filterTasksByDay("segunda")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Terça"}
          tasks={filterTasksByDay("terca")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Quarta"}
          tasks={filterTasksByDay("quarta")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Quinta"}
          tasks={filterTasksByDay("quinta")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Sexta"}
          tasks={filterTasksByDay("sexta")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Sábado"}
          tasks={filterTasksByDay("sabado")}
        />
        <PlannerDay
          deleteTask={deleteTask}
          dayName={"Domingo"}
          tasks={filterTasksByDay("domingo")}
        />
      </PlannerContainer>
    </div>
  );
}

export default App;
