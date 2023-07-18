import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import SignoutButton from "./SignoutButton"

export default async function Session() {
 const session = await getServerSession(authOptions)

  return (
    <>
      <p>{JSON.stringify(session)}</p>
      <SignoutButton />
    </>
  )
}