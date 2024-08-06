import Task from "../../../(models)/Task"
import { NextResponse } from "next/server";

export async function POST(req:any,{params}:{params:any}){
    const {id} = params;
    const body = await req.json();
    const taskData = body.formData;
    try{
        const data = await Task.findByIdAndUpdate(id,taskData);
        return NextResponse.json({message:"Success",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}