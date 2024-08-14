"use client";
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";
import axios from 'axios';
import { env } from 'process';
import { apifunc } from '../api';

const TaskForm = ({userId}:{userId:any}) => {
    const router = useRouter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startingUserData = {
       id:null,
       name:"karthi",
       age:21,
       email:"karthi@gmail.com",
       city:"salem",
       pincode:636211,
       mobile:8098098988,
    }
    const [formData,setFormData] = useState(startingUserData)
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
          if (userId) {
            const res = await apifunc.post("getuser",{id:userId});
            if(res.status == 200){
              const data = res.data.data[0];
              setFormData({...data})
            }else{
              setFormData(startingUserData)
            }
          } else {
            setFormData(startingUserData);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, [userId]);

    const handleSubmit =async (e:any) =>{
      e.preventDefault();
      let url = ""
      if(!userId||userId=="new"){
        url = "adduser"
      }else{
        url = "updateuser"
      }
      const res = await apifunc.post(url,formData)
        if(res.status !== 200){
          throw new Error("Failed to Create Ticket")
        }
        router.push("/user_management")
        router.refresh()
    }


  return (
    <div className='centerDiv'>
      <form onSubmit={handleSubmit} className='practiceform'>
        {/* <h3>Create Your Task</h3> */}
        <div>
        <label >Name</label>
        <input type="text" name="name" required={true} value={formData.name} onChange={handleChange}/>
        <label >Email</label>
        <input name="email" type="email" required={true} value={formData.email}  onChange={handleChange}/>
        <label >Age</label>
        <input type="number" name="age" required={true} value={formData.age} onChange={handleChange}/>
        <label >City</label>
        <input type="text" name="city" required={true} value={formData.city} onChange={handleChange}/>
        <label >Pincode</label>
        <input name="pincode" type="text" required={true} value={formData.pincode}  onChange={handleChange}/>
        <label >Mobile</label>
        <input name="number" type="text" min={10} max={10} required={true} value={formData.mobile}  onChange={handleChange}/>
        <input type="submit" value={userId&&userId!=='new'?"Update User":"Create User"} />
        </div>
      </form>
    </div>
  )
}

export default TaskForm
