import React from "react";
import classes from './BallChecked.module.css'

const ballChecked = ()=>{
    return (
        <div className={classes.ball}>
          <img
            className={classes['ball-svg']}
            src="img/ellipse1.svg"
            alt="ellipse"
          />
          <img className={classes['check-svg']} src="img/check.svg" alt="ellipse" />
        </div>
    )
}

export default ballChecked;