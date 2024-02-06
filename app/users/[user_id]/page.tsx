import React from "react";

interface Props {
  params: { id: number };
}

// Props only works at page, layout, and route level.
// If want to use Props in component, pass it to component as props.
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage{id}</div>;
};

export default UserDetailPage;
