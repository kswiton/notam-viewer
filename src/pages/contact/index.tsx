import React from "react";
import Layout from "../../Layouts/Layout";
import LeftMenu from "../../Navigation/LeftMenu";
import TopMenu from "../../Navigation/TopMenu";

const index = () => {
  const leftPanel = <LeftMenu activeSection="contact" />;
  const topPanel = <TopMenu />;

  return (
    <Layout topPanel={topPanel} leftPanel={leftPanel}>
      Contact test
    </Layout>
  );
};

export default index;
