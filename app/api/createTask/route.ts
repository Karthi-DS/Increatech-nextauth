// import Task from "../../(models)/Task";
import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req:any){
    try{
        const body = await req.json();
        const taskData = body.formData;
        taskData.priority = Number(taskData.priority)
        const Task = {
            task: taskData.task,
            priority: taskData.priority
          };
          
          const newTask = await prisma.task.create({
            data: Task
          });
          
          return NextResponse.json({ message: "Success", data: newTask }, { status: 200 });
          
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}