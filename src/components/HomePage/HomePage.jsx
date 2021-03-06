import { useEffect, useRef, useState } from "react";
import Blog from "../Layout/Blog/Blog";
import ListHotel from "../Layout/ListHotel/ListHotel";
import ListTour from "../Layout/ListTour/ListTour";
import Slider from "../Layout/Slider/Slider";
import dataTravelPopular from "../../api/data";

const HomePage = () => {
  const [listTours, setListTours] = useState([]);
  const [listHotel, setListHotel] = useState([]);
  const [isShow, setIsShow] = useState(false);
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
        setListTours(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListTour();
  }, []);

  useEffect(() => {
    async function fetchListHoltel() {
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
    fetchListHoltel();
  }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch("https://62850afd3060bbd34743a536.mockapi.io/tour_travel")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setListTour(data);
  //         // console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Slider />

      <div className="list">
        <div className="list__tour">
          <div className="list__tour__header">
            <h1>TOUR TRONG NG??Y V?? V?? VUI CH??I</h1>
            <p>D???ch v??? tour ?????o v?? v?? vinwonders, safari, c??p treo...</p>
          </div>
        </div>
        <div className="list_tour_container">
          {listTours.map(({ id, name, num_order, address, price, image }) => {
            return (
              <ListTour
                key={id}
                id={id}
                name={name}
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
            <h1>KH??CH S???N N???I B???T</h1>
            <p>Top nh???ng kh??ch s???n ph??? bi???n v?? ???????c nhi???u l???a ch???n nh???t</p>
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
            <h1>C???M NANG DU L???CH</h1>
            <p>
              G??c chia s??? kinh nghi???m v?? c???p nh???t th??ng tin m???i nh???t v??? du l???ch
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
    </>
  );
};

export default HomePage;
