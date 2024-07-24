import connecttoDb from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try{

        
        await connecttoDb()

        const {name,pin,uid} = await req.json()

        const isAccountAlreadyExists = await Account.find({uid,name})
        const allAccounts = await Account.find({})
        if (isAccountAlreadyExists){
            return NextResponse.json({
                success:false,
                message: "User already exists with this name.."
            })
        }

        if (allAccounts && allAccounts.length === 4){
            return NextResponse.json({
                success:false,
                message:"You can only add upto 4 account.",
            });
        }

        const hashPin = await hash(pin,12)

        const newlyCreatedAccount = await Account.create({
            name,
            pin:hashPin,
            uid
        })

        if(newlyCreatedAccount){
            return NextResponse.json({
                success:true,
                message:"Account created successfully.."
            })
        } else{
            return NextResponse.json({
                success:false,
                message:"Something went wrong..."
            })
        }

    } catch(e){
        console.log(e);
        return NextResponse.json({
            success:false,
            message:"Something went wrong...",
        });
    }
}