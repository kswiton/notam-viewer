import ContentColumn from "../../components/ContentColumn";
import React from "react";
import Layout from "../../Layouts/Layout";
import LeftMenu from "../../Navigation/LeftMenu";
import TopMenu from "../../Navigation/TopMenu";
import CarouselElem from "../../components/Carousel";
interface WeatherPageProps {
  data: any;
}
const WeatherPage: React.FC<WeatherPageProps> = (props) => {
  const { data } = props;
  const leftPanel = <LeftMenu activeSection="weather" />;
  const topPanel = <TopMenu />;

  return (
    <Layout topPanel={topPanel} leftPanel={leftPanel}>
      <ContentColumn variant="narrow">
        <CarouselElem data={data} />
      </ContentColumn>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default WeatherPage;
