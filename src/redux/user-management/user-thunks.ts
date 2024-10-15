import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserCredential, User } from "../../api/types"
// import { createNewUser, getReadableUserProfiles, loginUserWithNewPassword, postCheckSetPassword, postLoginUser } from "../../api/user-management"
import { loginUserWithNewPassword, postLoginUser } from "../../api/user-management"
import { setAuthCookie } from "../../api/axios"

const userLoginAsync = createAsyncThunk(
  'loginUser',
  async (userCredential: UserCredential) => {
    const result = await postLoginUser(userCredential)
    setAuthCookie(result?.authentication_token || null)
    return result.user
  }
)

const userLoginWithPasswordAsync = createAsyncThunk(
  'loginUserWithNewPassword',
  async (userCredential: UserCredential) => {
    const result = await loginUserWithNewPassword(userCredential)
    setAuthCookie(result?.token || null)
    return result.user
  }
)

// const checkAccountNeedSetPasswordAsync = createAsyncThunk(
//   'checkAccountNeedSetPassword',
//   async (email: string) => {
//     const result = await postCheckSetPassword(email)
//     return result
//   }
// )

// const createUserAsync = createAsyncThunk('createUser', async (user: User) => {
//   await createNewUser(user)
//   return user
// })

// const getReadableUserAsync = createAsyncThunk('loadsReadableUser', async () => {
//   const users = await getReadableUserProfiles()
//   return users
// })

export {
  userLoginAsync,
  userLoginWithPasswordAsync,
  // createUserAsync,
  // getReadableUserAsync,
  // checkAccountNeedSetPasswordAsync
}
