import React from "react";
import "./Slider.scss";
const Slider = () => {
  const mainService = [
    {
      id: 1,
      images: "https://beebeetravel.vn/assets/images/service/s1.png",
      title: "Chuyên Tour 4 Đảo",
      description:
        "Trải nghiệm dịch vụ lặn ngắm san hô chuyên nghiệp với giá cực rẻ.",
    },
    {
      id: 2,
      images: "https://beebeetravel.vn/assets/images/service/s2.png",
      title: "Khách Sạn Giá Rẻ",
      description: "Cung cấp dịch vụ đặt phòng khách sạn tiện lợi, tiết kiệm.",
    },
    {
      id: 3,
      images: "https://beebeetravel.vn/assets/images/service/s3.png",
      title: "Xuất Vé Nhanh Chóng 24/7",
      description:
        "Kiểm tra vé tiện lợi, nhanh chóng, bất cứ đâu và bất kỳ lúc nào.",
    },
  ];
  return (
    <div className="content">
      <div id="slider">
        <div className="owl-carousel owl-theme">
          <div className="slide slide-1">
            <div className="slide-content"></div>
          </div>
          <div className="slide slide-2">
            <div className="slide-content"></div>
          </div>
          <div className="slide slide-3">
            <div className="slide-content"></div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container">
          {mainService.map((item, index) => {
            return (
              <div className="service_box" key={index}>
                <div className="images">
                  <img src={item.images} alt="images_1" />
                </div>
                <div className="service_content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="experience">
        <div className="experience_container">
          <div className="experience_description">
            <h1 className="experience_title">Hình ảnh trải nghiệm</h1>
            <p className="experience_paragrap">
              Hành trình khám phá đại dương mênh mông
            </p>
          </div>
          <div className="experience_container_images">
            <div className="container">
              <div className="gallery-container w-3 h-2">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://beebeetravel.vn/assets/images/gallary/g1.jpg"
                      alt="nature"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-container w-3 h-3">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://beebeetravel.vn/assets/images/gallary/g2.jpg"
                      alt="people"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-container h-2">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://beebeetravel.vn/assets/images/gallary/g3.jpg"
                      alt="sport"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-container w-2">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://source.unsplash.com/1600x900/?fitness"
                      alt="fitness"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-container w-4 h-1">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://beebeetravel.vn/assets/images/gallary/g6.jpg"
                      alt="travel_img"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-container">
                <div className="gallery-item">
                  <div className="image">
                    <img
                      src="https://beebeetravel.vn/assets/images/gallary/g4.jpg"
                      alt="travel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
