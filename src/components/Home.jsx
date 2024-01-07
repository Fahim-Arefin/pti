import { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import Slider from "./Slider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [data, setData] = useState([]);
  const [popularData, setPopular] = useState([]);
  const [recommendedData, setRecommendedData] = useState([]);
  const popularModalRef = useRef(null);
  const recommendedModalRef = useRef(null);

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

  const handleAddItem = (item) => {
    console.log("parent data", item);
    setData([...data, item]);
    toast.success("Item Added Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
          modalRef={popularModalRef}
          handleAddItem={handleAddItem}
        />
        <Slider
          data={recommendedData}
          header="Recommended"
          forwarArrowdId="recommendedForward"
          backArrowId="recommendedBackward"
          className="mt-6 md:mt-12 lg:mt-44"
          modalRef={recommendedModalRef}
          handleAddItem={handleAddItem}
        />
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Home;
