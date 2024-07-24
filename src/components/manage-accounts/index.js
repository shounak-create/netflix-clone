'use client'

import { GlobalContext } from "@/context"
import { useSession } from "next-auth/react";
import PageLoader from "next/dist/client/page-loader";
import { useContext, useEffect } from "react"
import CircleLoader from "../circle-loader";



export default function ManageAccounts(){
    const {accounts,setAccounts,pageLoader, setPageLoader} = useContext(GlobalContext);
    const { data: session } = useSession();

async function getAllAccounts() {
    console.log(session?.user?.uid);
    if (!session?.user?.uid) {
        console.error("User ID is not available");
        return;
    }
    
    try {
        const res = await fetch(
            `/api/account/get-all-accounts?id=${session?.user?.uid}`,
            {
                method: "GET",
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("data", data);
        
        if (data && data.data && data.length) {
            setAccounts(data.data)
            setPageLoader(false)
        } else{
            setPageLoader(false)
        }

    } catch (error) {
        console.error("Failed to fetch accounts", error);
    }
}

useEffect(() => {
    getAllAccounts();
}, [session]);

if (pageLoader) return <CircleLoader />

    return (
        <div className="min-h-screen flex justify-center flex-col items-center relative">
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-white font-bold text-[54px] my-[36px]">Who's watching</h1>
            </div>
        </div>
    )
}