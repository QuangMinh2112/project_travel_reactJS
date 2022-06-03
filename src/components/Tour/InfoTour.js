import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Input,
  Row,
} from "reactstrap";
import { useInput } from "./hooks";
import "./infotour.scss";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";

const InfoTour = ({
  id,
  name,
  image,
  adults_price,
  children_price,
  oldster_price,
  content,
}) => {
  const input1 = useInput();
  const input2 = useInput();
  const input3 = useInput();

  const [total, setTotal] = useState(0);
  //Phần chuyển đổi số
  const currencyFormatDE = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  useEffect(() => {
    setTotal(
      input1.value * adults_price +
        input2.value * children_price +
        input3.value * oldster_price
    );
  }, [input1, input2, input3, adults_price, children_price, oldster_price]);

  return (
    <div>
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
                  {name}
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
                    src={image}
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
                      {currencyFormatDE(adults_price)} đ
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
                      {currencyFormatDE(input1.value * adults_price)} đ
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
                      {currencyFormatDE(children_price)} đ
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
                      {currencyFormatDE(input2.value * children_price)} đ
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
                      {currencyFormatDE(oldster_price)} đ
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
                      {currencyFormatDE(input3.value * oldster_price)} đ
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col
                      xl={5}
                      lg={6}
                      md={5}
                      xs={6}
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
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
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      {currencyFormatDE(total)} đ
                    </Col>
                  </Row>
                  <br />
                  <Button color="warning" className="card_btn">
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
            <i style={{ color: "red" }} class="fas fa-bolt"></i> Xác nhận nhanh
            chóng
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i class="fas fa-print"></i> Xuất vé điện tử
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i class="fas fa-calendar-alt"></i> Vé áp dụng ngày cố định
          </p>
        </Col>
        <Col xl={3} xs={6}>
          <p>
            <i class="fas fa-recycle"></i> Vé không hoàn trả
          </p>
        </Col>
        <hr />
      </Row>
      <Row className="mt-2">{ReactHtmlParser(content)}</Row>
    </div>
  );
};

export default InfoTour;
