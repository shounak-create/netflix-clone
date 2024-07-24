import connecttoDb from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
    try {
        await connecttoDb()

        const {searchParams} = new URL(req.url);
        const {id} = searchParams.get("id");

        //it will execute if account is not in database
        if (!id) {
            return NextResponse.json({
                success:false,
                message:"Something went wrong...",
            });
        }

        const deleteAccount = await Account.findByIdAndDelete(id);

        if (deleteAccount){
            return NextResponse.json({
                success:true,
                message:"Account deleted successfully..",
            });
        } else {
            return NextResponse.json({
                success:false,
                message:"Something went wrong...",
            });
        }

    } catch(e){
        console.log(e);
        return NextResponse.json({
            success:false,
            message:"Something went wrong...",
        });
    }
}
