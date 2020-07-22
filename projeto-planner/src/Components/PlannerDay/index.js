import React from "react";
import styled from "styled-components";
import { Typography, Card } from "@material-ui/core";

const PlannerDayContainer = styled(Card)`
  border: 1px solid black;
  padding: 0 8px;
  min-width: 100px;
  min-height: 300px;
`;
const Days = styled.div`
  text-align: center;
`;
const ListTasks = styled.ul`
  li {
  }
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

function PlannerDay(props) {
  return (
    <div>
      <PlannerDayContainer>
        <Days>
          <Typography color={"primary"}>
            <strong>{props.dayName}</strong>
          </Typography>
        </Days>
        <ListTasks>
          {props.tasks &&
            props.tasks.map((task) => {
              return (
                <li>
                  <Typography key={task.id}>
                    {task.text}
                    <DeleteButton onClick={() => props.deleteTask(task.id)}>
                      {" "}
                      x
                    </DeleteButton>
                  </Typography>
                </li>
              );
            })}
        </ListTasks>
      </PlannerDayContainer>
    </div>
  );
}

export default PlannerDay;
