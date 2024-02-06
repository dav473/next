import React from 'react'

interface Props{
    params: {
        user_id: string,
        photo_id: string
    }
}
const UserPhotoPage = ({params:{user_id, photo_id}}: Props) => {
  return (
    <div>UID = {user_id} photo ID isd {photo_id}</div>
  )
}

export default UserPhotoPage