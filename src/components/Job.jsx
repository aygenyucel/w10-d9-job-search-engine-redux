import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";

const Job = ({ data }) => {
  //we need to use useDispatch hook to allow this component to dispatch actions!
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Row
      className="mx-0 mt-3 p-3 d-flex justify-content-between"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="d-flex justify-content-end align-items-center">
        {isClicked ? (
          <FcLike
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAVOURITES",
                payload: data.company_name,
              });
              setIsClicked(!isClicked);
            }}
          />
        ) : (
          <FcLikePlaceholder
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: data.company_name,
              });
              setIsClicked(!isClicked);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
