import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { useInput } from "./hooks";
import "./infotour.scss";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import { useParams } from "react-router-dom";

const InfoTour = () => {
  const params = useParams();

  const input1 = useInput();

  const input2 = useInput();

  const input3 = useInput();

  const [tourDetail, setTourDetail] = useState({});
  // const [numberInput1, setNumberInput1] = useState("");
  // const [numberInput2, setNumberInput2] = useState("");
  // const [numberInput3, setNumberInput3] = useState("");

  const [total, setTotal] = useState(0);
  //Phần chuyển đổi số
  const currencyFormatDE = (num) => {
    if (typeof num === "number") {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    } else {
      return "";
    }
  };

  useEffect(() => {
    async function fetchListTour() {
      try {
        const requestApi = `https://62932fab7aa3e6af1a06dbc2.mockapi.io/listTour/${params.id}`;
        const response = await fetch(requestApi);
        const responseJSON = await response.json();
        setTourDetail(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListTour();
  }, []);

  useEffect(() => {
    setTotal(
      input1.value * tourDetail?.adults_price +
        input2.value * tourDetail?.children_price +
        input3.value * tourDetail?.oldster_price
    );
  }, [input1, input2, input3, tourDetail]);

  //Xử lí sự kiện

  const handleBookNow = () => {
    const data = {
      input1: input1.value * tourDetail?.adults_price,
      input2: input2.value * tourDetail?.adults_price,
      input3: input3.value * tourDetail?.adults_price,
      total,
    };

    if (data.input1 === 0) {
      swal(
        "Bạn phải điền đầy đủ thông tin !",
        "Tối thiểu là 1 thành viên(trên 1,4m)!",
        "error"
      );
      console.log("chưa điền đầy đủ thông tin");
    } else {
      swal(
        "Chúc mừng bạn đã đặt Tour thành công!",
        "You clicked the button!",
        "success"
      );
      console.log("oke");
    }
  };

  return (
    <Container>
      <Row className="mt-5 card">
        <Card className="card_tour">
          <Row>
            <Row>
              <Col xl={12} lg={12} md={12} xs={12}>
                <CardTitle
                  className="card_name"
                  tag="h3"
                  style={{ color: "orange" }}
                >
                  {tourDetail?.name}
                </CardTitle>
              </Col>
            </Row>
            <Row>
              <Col xl={7} lg={7} md={12} xs={12}>
                <CardBody>
                  <CardImg
                    className="card_image"
                    alt="Card image cap"
                    bottom
                    src={tourDetail?.image}
                  />
                </CardBody>
              </Col>
              <Col xl={5} lg={5} md={12} xs={12}>
                <CardBody>
                  <Row>
                    <CardTitle tag="h5">Người lớn (trên 1,4m)</CardTitle>
                    <Col xl={3} lg={3} md={3} xs={3}>
                      <Input
                        type="number"
                        min="0"
                        style={{ width: "100%" }}
                        onChange={input1.onChange}
                        value={input1.value}
                      />
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      x
                    </Col>
                    <Col xl={3} lg={3} md={3} xs={8}>
                      {currencyFormatDE(tourDetail?.adults_price)} đ
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      =
                    </Col>
                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      xs={6}
                      style={{ fontWeight: "bold" }}
                    >
                      {currencyFormatDE(
                        input1.value * tourDetail?.adults_price
                      )}
                      đ
                    </Col>
                  </Row>
                  <Row>
                    <CardTitle tag="h5">Trẻ em (từ 1m đến 1,4m)</CardTitle>
                    <Col xl={3} lg={3} md={3} xs={3}>
                      <Input
                        type="number"
                        min="0"
                        style={{ width: "100%" }}
                        onChange={input2.onChange}
                        value={input2.value}
                      />
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      x
                    </Col>
                    <Col xl={3} lg={3} md={3} xs={8}>
                      {currencyFormatDE(tourDetail?.children_price)} đ
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      =
                    </Col>
                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      xs={6}
                      style={{ fontWeight: "bold" }}
                    >
                      {currencyFormatDE(
                        input2.value * tourDetail?.children_price
                      )}{" "}
                      đ
                    </Col>
                  </Row>
                  <Row>
                    <CardTitle tag="h5">
                      Người cao tuổi (trên 60 tuổi)
                    </CardTitle>
                    <Col xl={3} lg={3} md={3} xs={3}>
                      <Input
                        type="number"
                        min="0"
                        style={{ width: "100%" }}
                        onChange={input3.onChange}
                        value={input3.value}
                      />
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      x
                    </Col>
                    <Col xl={3} lg={3} md={3} xs={8}>
                      {currencyFormatDE(tourDetail?.oldster_price)} đ
                    </Col>
                    <Col xl={1} lg={1} md={1} xs={1}>
                      =
                    </Col>
                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      xs={6}
                      style={{ fontWeight: "bold" }}
                    >
                      {currencyFormatDE(
                        input3.value * tourDetail?.oldster_price
                      )}{" "}
                      đ
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col
                      xl={5}
                      lg={6}
                      md={5}
                      xs={6}
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      Tổng tạm tính:{" "}
                    </Col>
                    <Col xl={2} lg={1} md={2} xs={1}></Col>
                    <Col
                      xl={4}
                      lg={5}
                      md={4}
                      xs={5}
                      style={{
                        color: "red",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {currencyFormatDE(total)} đ
                    </Col>
                  </Row>
                  <br />
                  <Button
                    color="warning"
                    className="card_btn"
                    onClick={handleBookNow}
                  >
                    ĐẶT VÉ
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Row>
        </Card>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col xl={3} xs={6}>
          <p>
            <i style={{ color: "red" }} className="fas fa-bolt"></i> Xác nhận
            nhanh chóng
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i className="fas fa-print"></i> Xuất vé điện tử
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i className="fas fa-calendar-alt"></i> Vé áp dụng ngày cố định
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i className="fas fa-recycle"></i> Vé không hoàn trả
          </p>
        </Col>
        <hr />
      </Row>
      <Row className="mt-2">
        {tourDetail.content ? ReactHtmlParser(tourDetail.content) : ""}
      </Row>
      <div
        class="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width=""
        data-numposts="5"
      ></div>
    </Container>
  );
};

export default InfoTour;
