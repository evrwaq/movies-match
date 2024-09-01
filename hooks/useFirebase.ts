import { db } from '@/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export function useFirebase() {
  const addUser = async(id: string, name: string, email: string) => {
    await setDoc(doc(db, "users", id), {
      email,
      name
    })
  }

  return {
    db,
    addUser
  }
}
