import React from "react";
import Layout from "../../Layouts/Layout";
import LeftMenu from "../../Navigation/LeftMenu";
import TopMenu from "../../Navigation/TopMenu";
import { gql, useQuery } from "@apollo/client";

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`;

const index = () => {
  const { data, loading, error } = useQuery(AllLinksQuery);
  const leftPanel = <LeftMenu activeSection="notams" />;
  const topPanel = <TopMenu />;
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <Layout topPanel={topPanel} leftPanel={leftPanel}>
      test
      <ul>
        {data.links.map((link: any) => (
          <li key={link.id}>
            <img src={link.imageUrl} />
            <div>
              <p>{link.category}</p>
              <p>{link.title}</p>
              <p>{link.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default index;
