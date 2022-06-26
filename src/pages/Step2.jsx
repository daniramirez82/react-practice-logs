import React, { useContext, useEffect } from "react";
import PageTitles from "../components/ui/PageTitles";
import Form from "../components/Form";
import AuthContext from "../store";

const Step2 = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    context.logIn();
  }, []);
  return (
    <>
      {context.isLoggedIn ? "log" : "no log"}
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" />
    </>
  );
};

export default Step2;
