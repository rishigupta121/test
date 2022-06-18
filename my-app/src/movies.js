import Card from "react-bootstrap/Card";

const Movies = (props) => {
  console.log(props.props);
  return props.props.map((item) => {
    return (
      <Card key={item.Title} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text>year: {item.Released}</Card.Text>
          <Card.Text>rating: {item.Year}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
};

export default Movies;
