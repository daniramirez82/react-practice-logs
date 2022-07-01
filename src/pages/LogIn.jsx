import React, { useContext, useEffect } from "react";
import PageTitles from "../components/ui/PageTitles";
import Form from "../components/Form";
import { FlowContext } from "../wrappers/FlowWrapper";

const Step2 = () => {

  const {setPageFlow} = useContext (FlowContext);

  useEffect (()=>{
    setPageFlow(2);
  },[])
  
  return (
    <>
      
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" />
    </>
  );
};

export default Step2;
