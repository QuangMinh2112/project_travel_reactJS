import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import ListHotel from "./components/Layout/ListHotel/ListHotel";
import ListTour from "./components/Layout/ListTour/ListTour";
import Slider from "./components/Layout/Slider/Slider";

import dataTravelPopular from "./api/data";
import Subscribe from "./components/Layout/Subscribe/Subscribe";
import Blog from "./components/Layout/Blog/Blog";
import Details from "./components/Layout/Details/Details";

const App = () => {
  const [listTour, setListTour] = useState([]);
  const [listHotel, setListHotel] = useState([]);
  const [visible, setVisible] = useState(3);
  const [data, setData] = useState(dataTravelPopular);
  const btnShowMore = useRef();

  const handleShowMoreBtn = () => {
    if (visible >= listHotel.length) {
      btnShowMore.current.style.display = "none";
    } else {
      setVisible((prev) => prev + 3);
    }
  };
  useEffect(() => {
    async function fetchListTour() {
      try {
        const requestApi =
          "https://62932fab7aa3e6af1a06dbc2.mockapi.io/listTour";
        const response = await fetch(requestApi);
        const responseJSON = await response.json();
        setListTour(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListTour();
  }, []);

  useEffect(() => {
    async function fetchListTour() {
      try {
        const requestApi =
          "https://62932fab7aa3e6af1a06dbc2.mockapi.io/listHotel";
        const response = await fetch(requestApi);
        const responseJSON = await response.json();
        setListHotel(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListTour();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Slider />

      <div className="list">
        <div className="list__tour">
          <div className="list__tour__header">
            <h1>TOUR TRONG NGÀY VÀ VÉ VUI CHƠI</h1>
            <p>Dịch vụ tour đảo và vé vinwonders, safari, cáp treo...</p>
          </div>
        </div>
        <div className="list_tour_container">
          {listTour.map(({ id, title, num_order, address, price, image }) => {
            return (
              <ListTour
                key={id}
                id={id}
                title={title}
                num_order={num_order}
                address={address}
                price={price}
                image={image}
              />
            );
          })}
        </div>
      </div>
      <div className="list">
        <div className="list__tour">
          <div className="list__tour__header">
            <h1>KHÁCH SẠN NỔI BẬT</h1>
            <p>Top những khách sạn phổ biến và được nhiều lựa chọn nhất</p>
          </div>
        </div>
        <div className="list_tour_container">
          {listHotel
            .slice(0, visible)
            .map(({ title, address, price, images, id }, index) => {
              return (
                <ListHotel
                  key={index}
                  title={title}
                  address={address}
                  price={price}
                  images={images}
                  id={id}
                />
              );
            })}
        </div>
        <div className="btn_show_more" ref={btnShowMore}>
          <button onClick={handleShowMoreBtn}>
            <i className="fa-solid fa-eye"></i> Load More
          </button>
        </div>
      </div>

      <div className="list">
        <div className="list__tour">
          <div className="list__tour__header">
            <h1>CẨM NANG DU LỊCH</h1>
            <p>
              Góc chia sẻ kinh nghiệm và cập nhật thông tin mới nhất về du lịch
            </p>
          </div>
        </div>
        <div className="list_tour_container">
          {data.map(({ id, title, images, date }, index) => {
            return (
              <Blog
                id={id}
                title={title}
                images={images}
                date={date}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Routes>
        <Route path="/details" element={<Details />}></Route>
      </Routes>

      <Subscribe />

      <Footer />
    </div>
  );
};

export default App;
