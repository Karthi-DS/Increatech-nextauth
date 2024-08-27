import Task from "../../(models)/Task";
import { NextResponse } from "next/server";

export async function POST(req:any){
    try{
        const body = await req.json();
        const taskData = body.formData;
        console.log(taskData,body)
        await Task.create(taskData);
        return NextResponse.json({message:"Success"},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}