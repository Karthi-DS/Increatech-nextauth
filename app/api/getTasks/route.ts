import Task from "../../(models)/Task";
import { NextResponse } from "next/server";

export async function GET(req:any,res:any){
    try{
        const data = await Task.find();
        console.log(data)
        return NextResponse.json({message:"Success",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}