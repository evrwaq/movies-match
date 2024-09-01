import { db } from '@/firebaseConfig'

export function useFirebase() {
  return {
    db
  }
}
