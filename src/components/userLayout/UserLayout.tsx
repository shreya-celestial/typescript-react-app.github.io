import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { USERS } from "../../assets/data";

const UserLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserLayout;

type paramsObj = {
  params: any;
  request?: any;
  context?: any;
};

export const loader = ({ params }: paramsObj) => {
  const isAvailable = USERS.find((user) => user.id === params.id);
  if (isAvailable === undefined) {
    throw new Error();
  }
  return isAvailable;
};
