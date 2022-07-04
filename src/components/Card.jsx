import React from "react";
import classes from './Card.module.css';
import PropTypes from 'prop-types';
import ButtonLarge from "./ui/ButtonLarge";
import Crown from "./ui/Crown";
import { Link } from "react-router-dom";

const Card = ({ user, userPic }) => {
    console.log(userPic);

    return <div className={classes['card-wrapper']}>
        <div className={classes['card-user-info']}>
            <div className={classes['card-user-pic']}>
                <img src={userPic} alt="user picture" />
            </div>
            <div className={classes['card-user-data']}>
                <div className={classes['card-user-text']}>
                    <div className={classes['card-user-group-text']}>
                        <div className={classes['card-user-name']}>{user}</div>
                        <div className={classes['card-user-status']}>Status User</div>
                    </div>
                    <div className={classes['card-user-breadcrumb']}><span className={classes['card-user-breadcrum']}>$15+</span></div>
                </div>
                <div className={classes['user-crowns']}>
                    <Crown></Crown>
                    <Crown></Crown>
                </div>
            </div>

        </div>
        <div className={classes['card-buttons']}>
            <Link to={'/'}> <ButtonLarge isOuterLine={true} >Log Off</ButtonLarge></Link>

            <ButtonLarge isGrey={true}>Configuration</ButtonLarge>

        </div>
    </div>

}

Card.prototype = {
    user: PropTypes.string.isRequired,
    userPic: PropTypes.string,
}

export default Card;