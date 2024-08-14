import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import "../globals.css";
import { useRouter } from "next/navigation"

const UserCard = ({user}:{user:any}) => {
    const router = useRouter()
    const pushToUpdate = () =>{
        router.push(`/user_management/user_page/${user._id}`)
      }
  return (
    <div className="userCard">
      <div >
        <div className="userDetails"><span className="attribute">Name</span>{user.name}</div>
        <div className="userDetails"><span className="attribute">Email</span>{user.email}</div>
        <div className="userDetails"><span className="attribute">Age</span>{user.age}</div>
        <div className="userDetails"><span className="attribute">City</span>{user.city}</div>
        <div className="userDetails"><span className="attribute">Pincode</span>{user.pincode}</div>
        <div className="userDetails"><span className="attribute">Mobile</span>{user.mobile}</div>
      </div>
      <div>
        <div className="inlineCard">
          <div className="iconDelete">
            <DeleteBlock _id={user._id}></DeleteBlock>
          </div>
          <div>
            <button className="editButton" onClick={pushToUpdate}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
