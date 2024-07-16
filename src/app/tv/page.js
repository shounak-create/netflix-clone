'use client'

import { useSession } from "next-auth/react";

export default function tv(){
    const {data:session} = useSession();

    if (session === null) return <UnauthPage/>
    return <div>tv</div>
}