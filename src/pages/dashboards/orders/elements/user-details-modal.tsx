import { Tooltip, Typography } from "@mui/material"
import BlockIcon from '@mui/icons-material/Block'
import CheckIcon from '@mui/icons-material/Check';
import { red, green } from '@mui/material/colors'
import { useDispatch, useSelector } from "react-redux"
import { selectAllUsers } from "../../../../redux/users-management/selector"
import { AppDispatch } from "../../../../redux/store"
import { useEffect } from "react"
import { listUsersAsync } from "../../../../redux/users-management/thunks"
import { Margin, Padding } from "@mui/icons-material";

export const UserDetailsModal = ({ userId }: any | null) => {

  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch<AppDispatch>()

  const content = (userId: any) => {
    if(userId !== null){
      return <CheckIcon sx={{ color: green[500] }} />
    } else {
      return <BlockIcon sx={{ color: red[500] }} />
    }
  }

  const userInfo = (userId: any) => {
    if(userId === null){
      return <p>Not Authorizer</p>
    } else {
      const user = users.find((u) => `${u.id}` === userId.toString())
      return (
        <>
          <span>id: {userId}</span><br />
          <span>role: {user?.role}</span><br />
          <span>{user?.email}</span><br />
          <span>{user?.first_name} {user?.last_name}</span><br />
          <span>Organizations:</span>
          {user?.organizations.map((org) => (
            <p style={{margin: '0'}}>{org}</p>
          ))}
        </>
      )
    }
  }

  return (
    <>
      <Tooltip title={userInfo(userId)}>
        <Typography component="body">
          {content(userId)}
        </Typography>
      </Tooltip>
    </>
  )
}
