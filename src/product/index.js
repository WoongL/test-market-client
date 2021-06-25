import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URI } from "../config/constants";
import dayjs from "dayjs";
import { Button, message } from "antd";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    axios
      .get(`${API_URI}/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {});
  };

  useEffect(function () {
    getProduct();
  }, []);

  if (product === null) return <h1>상품 정보를 받고 있습니다...</h1>;

  const onClickPurchase = () => {
    axios
      .post(`${API_URI}/purchase/${id}`)
      .then((result) => {
        message.info("구매가 완료되었습니다");
        getProduct();
      })
      .catch((error) => {
        message.error(`에러발생 ${error.message}`);
      });
  };
  return (
    <div>
      <div id="image-box">
        <img src={`${API_URI}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <Button
          id="purchase-button"
          size="large"
          type="primary"
          danger
          onClick={onClickPurchase}
          disabled={product.soldout === 1}
        >
          {product.soldout === 0 ? "재빨리 구매하기" : "구매완료"}
        </Button>
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
}
export default ProductPage;
