import { db } from '@/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { User } from '@/types/user'

export function useFirebase() {
  const addUser = async(user: User) => {
    await setDoc(doc(db, "users", user.id), {
      email: user.email,
      name: user.name
    })
  }

  return {
    db,
    addUser
  }
}
