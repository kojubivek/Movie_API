import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import fetchData from "../../utils/axiosHelper";
import { CustomCard } from "../card/CustomCard.component";

export const SearchForm = ({ addMovie }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setIsError(false);

    const { data } = await fetchData(form);
    if (data.Response === "True") {
      setMovie(data);
    } else {
      setIsError(true);
    }
  };

  const handleOnAddList = (movie) => {
    //send movie to parent component
    addMovie(movie);
    //reset movie to empty object
    setMovie({});
    //empty input  field to empty
    setForm("");
  };
  const removeDisplay = () => {
    setMovie({});
    setForm("");
  };
  return (
    <div className="bg-dark py-5 rounded">
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2 ">
          <Col className="d-flex justify-content-center">
            <div className="d-flex" style={{ width: "50%" }}>
              <Form.Control
                onChange={handleOnChange}
                placeholder="Search Movie"
                value={form}
              />
              <div className="d-grid">
                <Button varient="primary" type="submit">
                  Search
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="mt-3 d-flex justify-content-center">
        {movie.imdbID && (
          <CustomCard
            movie={movie}
            addMovie={addMovie}
            isDelete={false}
            removeDisplay={removeDisplay}
            handleOnAddList={handleOnAddList}
          />
        )}
        {isError && (
          <Alert variant="danger">
            {" "}
            No movie found, change the name and shearch again
          </Alert>
        )}
      </div>
    </div>
  );
};
