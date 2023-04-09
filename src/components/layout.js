import React from "react";
import { Link } from "gatsby";
import * as Styles from "./layout.module.css";
import {HiArrowCircleLeft,HiArrowCircleRight,HiOutlineHome} from 'react-icons/hi';
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={Styles.container}>
      <nav className={Styles.controller}>
        <HiArrowCircleLeft/>
        <HiOutlineHome style={{margin:"0 0.5rem"}}/>
        <HiArrowCircleRight/>
      </nav>
      <h1>{pageTitle}</h1>
      <main className={Styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
