'use client'

import { useSession } from "next-auth/react";
import { createContext } from "react";
import CircleLoader from "@/components/circle-loader/index"

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

    const {data: session} = useSession();

    if (session === undefined) return <CircleLoader />

    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}