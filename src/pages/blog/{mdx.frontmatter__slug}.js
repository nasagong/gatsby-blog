import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import * as Styles from './Blogpost.module.css';

const BlogPost = ({data,children}) => {
  return(
  <Layout>
    <div className={Styles.postInfo}>
      <div className={Styles.category}>{data.mdx.frontmatter.category} |</div>
      <div className={Styles.date}>  {data.mdx.frontmatter.date}</div>
    </div>
    <div className={Styles.postTitle}>
      {data.mdx.frontmatter.title}
    </div>
    <article>
      {children}
    </article>
  </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        category
      }
      excerpt
    }
  }
`;
