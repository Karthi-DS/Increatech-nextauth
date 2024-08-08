"use client";
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";
import axios from 'axios';

const TaskForm = ({taskId}:{taskId:any}) => {
    const router = useRouter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startingTaskData = {
        task:"",
        priority:0
    }
    const [formData,setFormData] = useState(startingTaskData)
    const handleChange = (e:any)=>{
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (taskId) {
            const res = await axios.get(`http://localhost:3000/api/getTaskById/${taskId}`);
            if(res.status == 200){
              const data = res.data.data;
              setFormData({task:data.task,priority:data.priority})
            }else{
              setFormData(startingTaskData)
            }
          } else {
            setFormData(startingTaskData);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, [taskId]);

    const handleSubmit =async (e:any) =>{
      e.preventDefault();
      let url = ""
      if(!taskId||taskId=="new"){
        url = "http://localhost:3000/api/createTask"
      }else{
        url = `http://localhost:3000/api/updateTaskById/${taskId}`
      }
      const res = await fetch(url,{
          method:"POST",
          body:JSON.stringify({formData})

        })
        if(!res.ok){
          throw new Error("Failed to Create Ticket")
        }
        router.push("/task_manager")
        router.refresh()
    }


  return (
    <div className='centerDiv'>
      <form onSubmit={handleSubmit} className='practiceform'>
        {/* <h3>Create Your Task</h3> */}
        <div>
        <label >Task</label>
        <input type="text" name="task" required={true} value={formData.task} onChange={handleChange}/>
        <label >Priority</label>
        <input name="priority" type="number" required={true} value={formData.priority}  onChange={handleChange}/>
        <input type="submit" value={taskId&&taskId!=='new'?"Update Task":"Create Task"} />
        </div>
      </form>
    </div>
  )
}

export default TaskForm
