import Task from "../../(models)/Task";
import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req:any,res:any){
    try{
        const data = await prisma.task.findMany();
        return NextResponse.json({message:"Success",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}