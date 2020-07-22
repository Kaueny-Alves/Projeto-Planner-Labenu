import React from "react";
import { TextField, InputLabel, MenuItem, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import { useInputValue } from "../Hooks/useInputValue";
import axios from "axios";
import { apiUrl } from "../../App";

const SelectControl = styled(FormControl)`
  && {
    min-width: 150px;
  }
`;

const TaskFormContainer = styled.form`
  display: grid;
  justify-content: center;
  align-items: end;
  gap: 8px;
  grid-auto-flow: column;
`;

function TaskForm(props) {
  const [newTaskText, onChangeTaskText, resetText] = useInputValue("");
  const [newTaskDay, onChangeTaskDay, resetDay] = useInputValue("");

  const onSubmitTaskForm = (event) => {
    event.preventDefault();

    const body = {
      text: newTaskText,
      day: newTaskDay,
    };

    axios.post(apiUrl, body).then((response) => {
      resetText();
      resetDay();
      props.updateTasks();
    });
  };

  return (
    <TaskFormContainer onSubmit={onSubmitTaskForm}>
      <TextField
        label={"Nova Tarefa"}
        value={newTaskText}
        onChange={onChangeTaskText}
      />
      <SelectControl className={""}>
        <InputLabel id="planner-day-select">Dia da Semana</InputLabel>
        <Select
          labelId="planner-day-select"
          id="demo-simple-select"
          value={newTaskDay}
          onChange={onChangeTaskDay}
        >
          <MenuItem value={"segunda"}>Segunda</MenuItem>
          <MenuItem value={"terca"}>Terça</MenuItem>
          <MenuItem value={"quarta"}>Quarta</MenuItem>
          <MenuItem value={"quinta"}>Quinta</MenuItem>
          <MenuItem value={"sexta"}>Sexta</MenuItem>
          <MenuItem value={"sabado"}>Sábado</MenuItem>
          <MenuItem value={"domingo"}>Domingo</MenuItem>
        </Select>
      </SelectControl>
      <Button type={"submit"} color={"primary"} variant={"contained"}>
        Criar tarefa
      </Button>
    </TaskFormContainer>
  );
}

export default TaskForm;
