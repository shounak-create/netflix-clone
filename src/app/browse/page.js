'use client'

import { useSession } from "next-auth/react"
import UnauthPage from '@/components/Unauth-page/index'

export default function Browse(){
    const {data:session} = useSession()

    console.log(session,'session');

    if (session === null) return <UnauthPage/>

    return <div>Browse</div>
}