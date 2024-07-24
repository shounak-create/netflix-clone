'use client'

import { useSession } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "@/context"
import ManageAccounts from "@/components/manage-accounts/index"


export default function page(){
    const {loggedInAccount} = useContext(GlobalContext)

    const {data:session} = useSession();

    if (session === null) return <UnauthPage/>
    if (loggedInAccount === null) return <ManageAccounts/>

    return <div>page</div>
}