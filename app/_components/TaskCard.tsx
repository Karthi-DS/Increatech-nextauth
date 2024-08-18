import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import "../globals.css";
import { useRouter } from "next/navigation";
import "../globals.css"

const TaskCard = ({ task }: { task: any }) => {

  const router = useRouter()
  const pushToUpdate = () =>{
    router.push(`/task_page/${task.id}`)
  }
  return (
    <div className="taskCard">
      <div className="inlineCard">
        <div className="iconPriority">
          <PriorityDisplay priority={task.priority}></PriorityDisplay>
        </div>
      </div>
      <div className="taskInfo">
        Task: <span className="taskInfoTask">{task.task}</span>
      </div>
      <div>
        <div className="inlineCard">
          <div className="iconDelete">
            <DeleteBlock _id={task.id}></DeleteBlock>
          </div>
          <div>
            <button className="editButton" onClick={pushToUpdate}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
