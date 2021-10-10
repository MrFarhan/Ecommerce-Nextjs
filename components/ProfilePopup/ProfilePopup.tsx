import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ProfilePopup.module.scss";
import fbIcon from "../../static/images/facebook-filled-white-icon.svg";
import googleIcon from "../../static/images/google-icon.svg";

const ProfilePopup = () => {
  return (
    <div className={styles.ProfilePopupContainer}>
      <h2 className={styles.heading}>Welcome To Ecommerce</h2>
      <p>Log in with email & password</p>
      <div className={styles.inputContainer}>
        <label htmlFor="email">
          <span>Email or Phone Number</span>
          <input id="email" type="email" placeholder="example@mail.com" />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input id="password" type="password" placeholder="******" />
        </label>
        <CustomButton text="Login" width="85%" />
        <span className={styles.lineBreak}>
          {" "}
          <hr />
          Or
          <hr />
        </span>
        <div className={styles.loginSocialBtns}>
          <CustomButton
            text="Continue with Facebook"
            width="85%"
            background="rgb(59, 89, 152)"
            icon={fbIcon}
          />
          <CustomButton
            text="Continue with Google"
            width="85%"
            background="rgb(66, 133, 244)"
            icon={googleIcon}
          />
        </div>
        <span className={styles.signupText}>
          <p>Don’t have account?</p>
          <a href="/signup">SignUp</a>
        </span>

        <span className={styles.forgotPassText}>
          <p>Forgot your password?</p>
          <a href="/forgot-pass">Reset It</a>
        </span>
      </div>
    </div>
  );
};

export default ProfilePopup;
