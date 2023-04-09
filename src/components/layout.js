import React from "react";
import { Link } from "gatsby";
import * as Styles from "./layout.module.css";
import {HiArrowCircleLeft,HiArrowCircleRight,HiOutlineHome} from 'react-icons/hi';
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={Styles.container}>
      <header>
        <HiArrowCircleLeft Link to="/"/>
        <HiOutlineHome/>
        <HiArrowCircleRight/>
      </header>
      <h1>{pageTitle}</h1>
      <hr/>
      <nav>
        {/*
        <ul>
          <li>
            <Link to="/" className={Styles.active}>
              Category A
            </Link>
          </li>
          <li>
            <Link to="/" className={Styles.active}>
              Categoty B
            </Link>
          </li>
          <li>
            <Link to="/" className={Styles.active}>
              Category C
            </Link>
          </li>
          <li>
            <Link to="/" className={Styles.active}>
              Category D
            </Link>
          </li>
        </ul>
  */}
      </nav>
      <main className={Styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
