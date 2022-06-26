import React, { useContext, useEffect } from "react";
import PageTitles from "../components/ui/PageTitles";
import Form from "../components/Form";
import AuthContext from "../store";

let context = null;
const Step2 = () => {
  useEffect(()=>{
   context = useContext(AuthContext);
   context.logIn();
  }, [])
  return (
    <>
      if (context) && <p>{context.isLoggedIn}</p>
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" />
    </>
  );
};

export default Step2;
