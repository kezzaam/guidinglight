import { useSession, signOut } from "next-auth/react"

export default function Session() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  console.log(session)
  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
    </>
  )
}