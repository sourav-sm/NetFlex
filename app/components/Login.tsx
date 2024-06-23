'use client'
import { useSession,signIn,signOut } from "next-auth/react"

export const Login=()=>{
    const {data:session}=useSession()
    if(session){
        return (
            <div>
                Signed in as {session.user?.email?? 'User'} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }
    return(
        <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}