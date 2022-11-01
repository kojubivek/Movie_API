import React from "react";
import { Card, Button } from "react-bootstrap";
export const CustomCard = ({
  movie,
  isDelete,
  handleOnAddList,
  deleteMovie,
  removeDisplay,
}) => {
  return (
    <Card style={{ width: "18rem", color: "black" }} className="card-1">
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>{movie?.plot}</Card.Text>
        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.Year}
        </Card.Text>
        {isDelete ? (
          <div className="d-grid">
            <Button variant="danger" onClick={() => deleteMovie(movie.imdbID)}>
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => {
                handleOnAddList({ ...movie, type: "happy" });
              }}
              variant="danger"
            >
              Happy
            </Button>
            <i
              className="fa-sharp fa-solid fa-circle-xmark"
              onClick={removeDisplay}
            ></i>
            <Button
              onClick={() => {
                handleOnAddList({ ...movie, type: "lazy" });
              }}
              variant="info"
            >
              Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
