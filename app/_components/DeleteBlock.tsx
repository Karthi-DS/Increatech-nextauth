"use client";
import { useRouter } from 'next/navigation';
import { env } from 'process';
import { apifunc } from '../api';

const DeleteBlock = ({_id}:{_id:any}) => {
  console.log(_id)
  const router = useRouter()
  const deleteUser =async (e:any) =>{
      e.preventDefault();
      const res = await apifunc.post("deleteuser",{id:_id})
      if(res.status !==200){
        throw new Error("Failed to Create Ticket")
      } else{
        router.refresh()
      }  
  }
  return (
    <div>
        <button onClick={deleteUser} className="deleteButton" >Delete</button>
    </div>
  )
}

export default DeleteBlock
