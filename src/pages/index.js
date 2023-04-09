import React from "react";
import Layout from "../components/layout";
import * as Styles from "./index.module.css";
import { CgProfile } from "react-icons/cg";

const IndexPage = () => {
  return (
    <Layout pageTitle="Main Page">
      <div className={Styles.profile}>
        <CgProfile className={Styles.profileImage} />
        <div className={Styles.introduce}>
          <span style={{fontSize:"0.6rem"}}>Written by [@nasagong]</span><br/>
          <h2>Hi! I'm nasagong.</h2><br/>
          test test test<br/>
          I hate JavaScript!
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
