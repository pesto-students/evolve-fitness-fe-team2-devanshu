import { Card, CardImg, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogImageGrid.css";

const BlogImageGrid = () => {
  // obviously I am just hard-coding in a random number here.  This is where
  // you would have a call to an API or something where you would get all
  // your card data from, ideally that API call would return an array of data
  // and then you could just map over that array to output the card data
  // down below in the render section
  const numberOfCards = 11;

  return (
    <Row>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div className="Container">
          <div className="Wrapper w-100 shadow-1-strong rounded ">
            <Link to="/blog/2">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Nature"
                class="w-100 shadow-1-strong rounded mb-4"
              />
              <div className="text-block w-100 rounded mb-4">
                <h4>Nature</h4>
                <p>What a beautiful sunrise</p>
              </div>
            </Link>
          </div>
          <Link to="/blog/2">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              class="w-100 shadow-1-strong rounded"
              alt="Wintry Mountain Landscape"
            />
          </Link>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <Link to="/blog/2">
          <img
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
        </Link>

        <div className="Wrapper w-100 shadow-1-strong rounded">
          <Link to="/blog/2">
            <img
              src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80"
              alt="Nature"
              class="w-100 shadow-1-strong rounded mb-4"
              // style={{ objectFit: "cover" }}
            />
            <div className="text-block w-100 rounded mb-4">
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </div>
          </Link>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div className="Container">
          <div className="Wrapper w-100 shadow-1-strong rounded ">
            <Link to="/blog/2">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Nature"
                class="w-100 shadow-1-strong rounded mb-4"
              />
              <div className="text-block w-100 rounded mb-4">
                <h4>Nature</h4>
                <p>What a beautiful sunrise</p>
              </div>
            </Link>
          </div>
          <Link to="/blog/2">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              class="w-100 shadow-1-strong rounded"
              alt="Wintry Mountain Landscape"
            />
          </Link>
        </div>
      </div>
    </Row>
  );
};

export default BlogImageGrid;
