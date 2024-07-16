'use client'

import { useSession } from "next-auth/react";

export default function page(){
    const {data:session} = useSession();

    if (session === null) return <UnauthPage/>
    return <div>page</div>
}