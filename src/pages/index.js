import React from "react";
import Layout from "../components/layout";
import * as Styles from "./index.module.css";
import { CgProfile } from "react-icons/cg";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Main Page">
      <div className={Styles.profile}>
        <CgProfile className={Styles.profileImage} />
        <div className={Styles.introduce}>
          <span style={{ fontSize: "0.6rem" }}>Written by [@nasagong]</span>
          <br />
          <h2>Hi! I'm nasagong.</h2>
          <br />
          test test test
          <br />I hate JavaScript!
        </div>
      </div>
      <div className={Styles.category}>
        <ul>
          <li>Javascript</li>
          <li>Computer Science</li>
          <li>Network</li>
        </ul>
      </div>
      <div className={Styles.postList}>
        {data.allMdx.nodes.map((node) => (
          <div className={Styles.post}>
            <article key={node.id}>
              <div style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
                {node.frontmatter.title}
              </div>
              <div style={{ fontSize: "0.8rem" }}>{node.excerpt}</div>
            </article>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          date
        }
        id
        excerpt
      }
    }
  }
`;
export default IndexPage;
