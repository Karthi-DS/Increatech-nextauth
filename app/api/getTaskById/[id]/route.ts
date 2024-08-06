import Task from "../../../(models)/Task"
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req:any,{params}:{params:any}){
    const {id} = params;
    try{
        const data = await Task.findById(id);
        return NextResponse.json({message:"Success",data:data},{status:200})
    }catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}