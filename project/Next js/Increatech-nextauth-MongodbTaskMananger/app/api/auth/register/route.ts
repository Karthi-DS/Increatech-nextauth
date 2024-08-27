import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try{
        const {name,password}= await request.json();
        console.log(name,password)
    }catch(e){
        console.log(e)
    }

    return NextResponse.json({message:'success...'})
}