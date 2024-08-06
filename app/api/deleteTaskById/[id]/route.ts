import Task from "../../../(models)/Task"
import { NextResponse } from "next/server";

export async function POST(req:any,{params}:{params:any}){
    const {id} = params;
    try{
        const data = await Task.findByIdAndDelete(id);
        return NextResponse.json({message:"Deleted",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}