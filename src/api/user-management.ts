import { HttpRequest } from './axios'
import { UserCredential, User, CurrentUserRole } from './types';

const enum Endpoints {
  PostUserApproved = '/approved',
  PostUserLogin = '/login',
  PostLoginWithNewPassword = '/user/set-new-password',
  PostUserLogout = '/logout'
  // PostCheckPasswordSet = '/passwords/update/new',
  // GetReadableUsers = '/user/readable-user-list',
  // PostCreateNewUser = '/user/create-new-user',
  // PatchUser = '/user/user-id/update',
}

const postUserLogout = async () => {
  try {
    await HttpRequest.post(Endpoints.PostUserLogout, {})
  } catch (error) {
    return error
  }
}

const postUserApproved = async (email: string | undefined) => {
  try {
    const result = await HttpRequest.post(Endpoints.PostUserApproved, {
      email
    })
    return result.data
  } catch (error) {
    return error
  }
}

const postLoginUser = async (userCredential: UserCredential) => {
  try {
    const result = await HttpRequest.post(Endpoints.PostUserLogin, {
      ...userCredential
    })
    return result.data
  } catch (error) {
    return error
  }
}

const loginUserWithNewPassword = async (userCredential:UserCredential) => {
  try {
    const result = await HttpRequest.post(Endpoints.PostLoginWithNewPassword, {
     ...userCredential
    })
    return result.data
  } catch (error) {
    return error
  }
}


// const postCheckSetPassword = async (email: string) => {
//   try {
//     const result = await HttpRequest.post(Endpoints.PostCheckPasswordSet, {
//       email,
//     })
//     return result.data
//   } catch (error) {
//     return error
//   }
// }

// const getReadableUserProfiles = async ():Promise<User[]> => {
//   try {
//     const result = await HttpRequest.get(Endpoints.GetReadableUsers)
//     return result.data
//   } catch (error) {
//     throw error
//   }
// }

// const createNewUser = async (user: User):Promise<number> => {
//   try {
//     const result = await HttpRequest.post(Endpoints.PostCreateNewUser, {
//       ...user
//     })
//     return result.status
//   } catch (error) {
//     throw error
//   }

// }

// const updateExistingUser = async (user: Partial<User>):Promise<number> => {
//   try {
//     const result = await HttpRequest.post(Endpoints.PatchUser, {
//       ...user
//     })
//     return result.status
//   } catch (error) {
//     throw error
//   }

// }

export {
  postUserApproved,
  postLoginUser,
  // postCheckSetPassword,
  loginUserWithNewPassword,
  postUserLogout,
  // getReadableUserProfiles,
  // createNewUser,
  // updateExistingUser
}
