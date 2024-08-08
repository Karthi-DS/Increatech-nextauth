// import Task from "../../../(models)/Task"
import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req:any,{params}:{params:any}){
    const {id} = params;
    try{
        // const data = await Task.findByIdAndDelete(id);
        const data = await prisma.task.delete({where:{id:Number(id)}})
        return NextResponse.json({message:"Deleted",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}