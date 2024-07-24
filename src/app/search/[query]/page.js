'use client'

import { useSession } from "next-auth/react";
import { GlobalContext } from "@/context"
import ManageAccounts from "@/components/manage-accounts/index"
import { useContext } from "react";
import UnauthPage from '@/components/Unauth-page/index'




export default function search(){
    const {data:session} = useSession();
    const {loggedInAccount} = useContext(GlobalContext)


    if (session === null) return <UnauthPage/>
    if (loggedInAccount === null) return <ManageAccounts/>

    return <div>search</div>
}