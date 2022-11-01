import React, { useEffect, useState } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard.component";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayMovie, setDisplayMovie] = useState([]);
  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);
  const selectCategory = (cat) => {
    cat === "all" && setDisplayMovie(movieList);
    cat === "happy" &&
      setDisplayMovie(movieList.filter((item) => item.type === "happy"));
    cat === "lazy" &&
      setDisplayMovie(movieList.filter((item) => item.type === "lazy"));
  };

  return (
    <div className="">
      <Row className="bg-dark py-5 rounded p-2 mt-5">
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => selectCategory("all")}>
              All
            </Button>
            <Button variant="danger" onClick={() => selectCategory("happy")}>
              Happy
            </Button>
            <Button variant="info" onClick={() => selectCategory("lazy")}>
              Lazy
            </Button>
          </ButtonGroup>
          <p className="mt-3">{displayMovie.length} Movies found</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex flex-wrap justify-content-around gap-3">
          {displayMovie.map((item) => {
            return (
              <CustomCard
                movie={item}
                isDelete={true}
                deleteMovie={deleteMovie}
              />
            );
          })}{" "}
        </Col>
      </Row>
    </div>
  );
};
