import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../APIcall/Apicalls";
import Navbar from "../Components/Navbar";
import Popup from "../Components/Popup";
import Fotter from "../Components/Fotter";

const News = () => {
  const myState = useSelector((state) => state.alldata);
  console.log("cards data from redux", myState);

  return (
    <>
      <div className="mainDiv">
        <div className="navBar">
          <Navbar />
        </div>

        <Cards />

        {myState?.Cards.map((x) => {
          return (
            <Card
              style={{ width: 200, padding: 20, margin: 40 }}
              cover={<img alt="/" style={{ height: "180px" }} src={x?.image} />}
            >
              <div className="des">
                <Meta className="desc"
                  title={x?.title}
                  description={` ${x?.description.slice(0,50)}...
                  price : $ ${x?.price} `}
                />
                <p className="del"> 3 Days Delivery</p>
              </div>

              <Popup />
            </Card>
          );
        })}
      </div>
      <Fotter />
    </>
  );
};

export default News;
