'use client'

import { useSession } from "next-auth/react"
import UnauthPage from '@/components/Unauth-page/index'
import { useContext } from "react"
import { GlobalContext } from "@/context"
import ManageAccounts from "@/components/manage-accounts/index"

export default function Browse(){
    
    const {loggedInAccount} = useContext(GlobalContext)

    const {data:session} = useSession()

    console.log(session,'session');

    if (session === null) return <UnauthPage/>
    if (loggedInAccount === null) return <ManageAccounts/>

    return <div>Browse</div>
}