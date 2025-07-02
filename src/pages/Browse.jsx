import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Browse = () => {
  const store = useSelector((state) => state.user);
  console.log(store);
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
