import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 
export default function Page() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }
 
  // Define other routes and logic
}

export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}