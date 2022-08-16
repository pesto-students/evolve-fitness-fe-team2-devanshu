import { Card, CardImg, Button, Container, Row, Col } from "react-bootstrap";

const BlogImageGrid = () => {
  // obviously I am just hard-coding in a random number here.  This is where
  // you would have a call to an API or something where you would get all
  // your card data from, ideally that API call would return an array of data
  // and then you could just map over that array to output the card data
  // down below in the render section
  const numberOfCards = 11;

  return (
    <div className="App">
      <Container>
        <Row xs={3}>
          {[...Array(numberOfCards)].map((e, i) => {
            return (
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Card image cap"
                  />
                  <Card.Body>
                    <Card.Title tag="h5">Card title #{i + 1}</Card.Title>
                    <Card.Subtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button>Button</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogImageGrid;
