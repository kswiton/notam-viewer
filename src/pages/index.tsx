import React from "react";
import Layout from "../Layouts/Layout";
import LeftMenu from "../Navigation/LeftMenu";
import TopMenu from "../Navigation/TopMenu";

const Home: React.FC = () => {
  const leftPanel = <LeftMenu activeSection="notams" />;
  const topPanel = <TopMenu />;
  return (
    <Layout leftPanel={leftPanel} topPanel={topPanel}>
      <></>
    </Layout>
  );
};

export default Home;
