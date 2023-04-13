import React from "react";
import * as Styles from "./layout.module.css";
import {HiArrowCircleLeft,HiArrowCircleRight,HiOutlineHome} from 'react-icons/hi';
import {Link} from 'gatsby';
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={Styles.container}>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main className={Styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
