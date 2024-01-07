import { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import Slider from "./Slider";

function Home() {
  const [data, setData] = useState([]);
  const [popularData, setPopular] = useState([]);
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
      );
      setData(res.data.Items);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const popular = data.filter((item) => item.IsPopular === true);
      const recommended = data.filter((item) => item.IsRecommended === true);
      setPopular(popular);
      setRecommendedData(recommended);
    }
  }, [data]);

  console.log("All", data);
  console.log("Popular", popularData);
  console.log("rec", recommendedData);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="mt-44">
        <Slider
          data={popularData}
          header="Popular"
          forwarArrowdId="popularForward"
          backArrowId="popularBackward"
          className=""
        />
        <Slider
          data={recommendedData}
          header="Recommended"
          forwarArrowdId="recommendedForward"
          backArrowId="recommendedBackward"
          className="mt-6 md:mt-12 lg:mt-44"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
