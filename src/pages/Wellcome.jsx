import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Titles from "../components/ui/PageTitles";
import ButtonLarge from "../components/ui/ButtonLarge";
import classes from "./Wellcome.module.css";
import AuthContext from "../store";

const Wellcome = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    context.logOff();
  }, []);
  return (
    <div className={classes["wellcome-wrapper"]}>
      <p>{context.isLoggedIn ? 'log' : 'no log'}</p>
      <Titles title="wellcome again :)" />
      <div className={classes.buttons}>
        <div className={classes.button1}>
          <Link to={"/Step2"}>
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
