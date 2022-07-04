import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import Titles from "../components/ui/PageTitles";
import ButtonLarge from "../components/ui/ButtonLarge";
import classes from "./Wellcome.module.css";
import { UserContext } from "../wrappers/AuthWrapper";
import { FlowContext } from "../wrappers/FlowWrapper";

const Wellcome = () => {

  const {logOff} = useContext(UserContext);
  const {setPageFlow} = useContext(FlowContext);

  useEffect(()=>{
    logOff();
    setPageFlow(1);
  },[]);

  return (
    <div className={classes["wellcome-wrapper"]}>
      <Titles title="wellcome home :)" />
      <div className={classes.buttons}>
        <div className={classes.button1}>
          <Link to={"/login"}>
            {" "}
            <ButtonLarge isOuterLine={true} type="button">
              Login
            </ButtonLarge>
          </Link>
        </div>
        <div className="button">
          <ButtonLarge type={"button"} isClear={false}>
            Register{" "}
          </ButtonLarge>

        </div>
      </div>
    </div>
  );
};

export default Wellcome;
