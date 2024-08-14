"use client";
import UserCard from "../_components/UserCard";
import Navbar from "../_components/nav";
import Link from "next/link";
import "../globals.css"
import React,{useEffect,useState} from "react";
import { useRouter } from "next/navigation";
import { apifunc } from "../api";
import axios from "axios";

export default function Home() {
  const [users,setUsers] = useState([{name:"karthi",email:"karhti@gmail.com",age:21,city:"salem",pincode:"636123",mobile:"8809890883"}])
  const [isLoading,setLoading] = useState(false);
  const router = useRouter()
  const pushToAddTask = ()=>{
    router.push("user_management/user_page/new")
  }
  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await apifunc.post("https://cloudide.co.in/workspace/reactor2/public/traininguser/getuser",{})
        const userData = response.data.data;
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setLoading(false)
      }
    };
    fetchData();
  },[])
  return (
    <>
      <Navbar/>
        {isLoading?"Loading..":users.length>0?
          users.map((user:any,index)=>(
            <div className="cardDiv" key={index}>         
              <UserCard user={user}/>
            </div>
          )):"No Tickets to display"
        }
        <button className="addTask" onClick={pushToAddTask}>Add <br /> User</button>
    </>
  )
}
