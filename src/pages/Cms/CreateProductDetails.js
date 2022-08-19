import React, { useEffect, useState, Component } from "react";
import { Form, Col, Button, Figure, Container, Row } from "react-bootstrap";
import axios from "axios";
import ProdctImageCard from "../../components/ProductDetails/ProdctImageCard";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classes from "./CreatProductDetail.module.css";
import { CreateProduct } from "../../services/cmsService";
import { GetProductByOwnerId } from "../../services/admiService";
import Loader from "../../components/Loader";
import { connect } from "react-redux";
import withNavigateHook from "../../components/withNavigateHook";

class CreateProductDetails extends Component {
  state = {
    name: "",
    description: "",
    featuredImageUrl: "",
    featuredImageView: [
      "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
      "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
      "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
    ],
    address: {
      phoneNumber: "",
      state: "",
      country: "",
      area: "",
      city: "",
      url: "",
    },
    price: {
      gold: {
        price: "",
        duration: "",
        personalTrainer: "",
        color: "#CD7F32",
      },
      silver: {
        price: "",
        duration: "",
        personalTrainer: "",
        color: "#C0C0C0",
      },
      bronze: {
        price: "",
        duration: "",
        personalTrainer: "",
        color: "#FFCA4B",
      },
      platinum: {
        price: "",
        duration: "",
        personalTrainer: "",
        color: "#a0a09e",
      },
    },
    category: "",
    fitnessType: "",
    Edit: false,
    isLoading: false,
  };

  //  HANDEL TEXT CHANGES
  OnchangeHandler = (e) => {
    if (e.target.name === "name" || e.target.name === "description") {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    console.log(e.target.value);
  };

  //  HANDEL PRICE CARD
  OnchangeCardPrice = (e, key) => {
    this.setState((prevState) => ({
      price: {
        ...prevState.price,
        [key]: {
          ...prevState.price[key],
          [e.target.name]: e.target.value,
        },
      },
    }));
  };

  //  HANDEL Address
  OnchangeAddress = (e) => {
    this.setState({
      address: {
        ...this.state.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  //  HANDEL IMAGES
  handleImageChange = (e) => {
    if (e.target.files.length === 3) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      this.setState({ featuredImageUrl: e.target.files });
      this.setState({ featuredImageView: filesArray });
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    } else {
      alert("Select Three Images");
    }
  };
  // HANDEL PHONE NUMBER
  OnchangePhoneNumber = (number) => {
    this.setState((prevState) => ({
      address: {
        ...prevState.address,
        phoneNumber: number,
      },
    }));
  };

  //  FORM SUBMIT HANDELER
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    console.log(this.state);
    let formData = new FormData();
    for (let [key, value] of Object.entries(this.state)) {
      switch (key) {
        case "isLoading":
          break;
        case "Edit":
          break;
        case "address":
          formData.append(`${key}`, JSON.stringify(value));
          break;
        case "price":
          formData.append(`${key}`, JSON.stringify(value));
          break;
        case "featuredImageUrl":
          for (let i = 0; i < this.state.featuredImageUrl.length; i++) {
            formData.append("featuredImageUrl", this.state.featuredImageUrl[i]);
          }
          break;

        default:
          formData.append(`${key}`, value);
      }
    }

    CreateProduct(formData)
      .then((res) => {
        console.log(res);
        e.target.reset();
        this.setState({ isLoading: false });
        this.props.navigation(`/create-fitness-center/${this.props.userId}`);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  // Form update  updateHandeler
  updateHandeler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
  };
  componentDidMount() {
   
    this.setState({isLoading : true})
    if (this.props.param.id !== undefined) {
      this.setState({ Edit: true });
      
      GetProductByOwnerId(this.props.param.id)
        .then((res) => {
           if (res.status === 200) {
          let {
            featuredImageUrl,
            name,
            description,
            category,
            fitnessType,
            address,
            price,
          } = res.data.product[0];

          address = JSON.parse(address);
          price = JSON.parse(price);
          this.setState({
            featuredImageView: featuredImageUrl,
          });
          this.setState({ featuredImageUrl });
          this.setState({ name });
          this.setState({ description });
          this.setState({ category });
          this.setState({ fitnessType });
          this.setState({ address });
          this.setState({ price });
          this.setState({ isLoading: false });
        }
        })
        .then((err) => {});
    }
  }
  render() {
    console.log(this.state);
    return (
      <Container>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Form
            onSubmit={
              !this.state.Edit ? this.submitHandler : this.updateHandeler
            }
          >
            <Form.Group controlId="formFile" className="mb-3">
              {/*  Images Filed */}

              <ProdctImageCard images={this.state.featuredImageView} />
              <Form.Label className={classes.FormLable}>
                Upload Three images For Your Fitness
              </Form.Label>
              <Form.Control
                type="file"
                name="image"
                label="featured Image Upload"
                accept="image/*"
                multiple={true}
                onChange={(e) => this.handleImageChange(e)}
                custom
                required={true}
              />
            </Form.Group>

            {/*  Name Filed */}

            <Form.Group>
              <Form.Label className={classes.FormLable}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.OnchangeHandler}
              />
            </Form.Group>
            {/*  Description Filed */}
            <Form.Group>
              <Form.Label className={classes.FormLable}>Description</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                //   size="lg"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={this.OnchangeHandler}
              />
            </Form.Group>

            {/*  Category  and PhoneNumber Filed */}
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label className={classes.FormLable}>
                    Category: <span className="asterisk"> *</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={this.state.category}
                    onChange={this.OnchangeHandler}
                    required={true}
                  >
                    <option defaultValue value="">
                      Select a category
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                  </Form.Control>
                </Col>
                {/*  FITNESS TYPE */}
                <Col>
                  <Form.Label className={classes.FormLable}>
                    Fitness Center Type: <span className="asterisk"> *</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="fitnessType"
                    value={this.state.fitnessType}
                    onChange={this.OnchangeHandler}
                    required={true}
                  >
                    <option defaultValue value="">
                      Select a type
                    </option>
                    <option value="gym">Gym</option>
                    <option value="yoga">Yoga</option>
                    <option value="zumba">Zumba</option>
                    <option value="martialart">Martial Art</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label className={classes.FormLable}>
                    PhoneNumber
                  </Form.Label>
                  <PhoneInput
                    country={"us"}
                    name="PhoneNumber"
                    value={this.state.address.phoneNumber}
                    onChange={(phoneNumber) =>
                      this.OnchangePhoneNumber(phoneNumber)
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Price Filed */}
            <Form.Group>
              <Row>
                {Object.keys(this.state.price).map((key, index) => (
                  <Col className={classes.priceCard}>
                    <div className={classes.priceCardName}>
                      <h4>{`${key} Card`}</h4>
                    </div>

                    <Col>
                      <Form.Label className={classes.FormLable}>
                        {`${key} price`}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="price"
                        name="price"
                        value={this.state.price[key].price}
                        onChange={(e) => this.OnchangeCardPrice(e, `${key}`)}
                        required={true}
                      />
                    </Col>
                    <Col>
                      <Form.Label className={classes.FormLable}>
                        {`${key} Duration`}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Duration"
                        name="duration"
                        value={this.state.price[key].duration}
                        onChange={(e) => this.OnchangeCardPrice(e, `${key}`)}
                        required={true}
                      />
                    </Col>
                    <Col>
                      <Form.Label className={classes.FormLable}>
                        {`${key} Trainer Fee`}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Personal Trainer Fee"
                        name="personalTrainer"
                        value={this.state.price[key].personalTrainer}
                        onChange={(e) => this.OnchangeCardPrice(e, `${key}`)}
                        required={true}
                      />
                    </Col>
                  </Col>
                ))}
              </Row>
            </Form.Group>

            {/*  Address and Map fields */}

            <Form.Group>
              <Row>
                <Col>
                  <Col>
                    <Form.Label className={classes.FormLable}>
                      Country
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={this.state.address.country}
                      onChange={(e) => this.OnchangeAddress(e)}
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Form.Label className={classes.FormLable}>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={this.state.address.state}
                      onChange={(e) => this.OnchangeAddress(e)}
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Form.Label className={classes.FormLable}>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="city"
                      name="city"
                      value={this.state.address.city}
                      onChange={(e) => this.OnchangeAddress(e)}
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Form.Label className={classes.FormLable}>Area</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Area"
                      name="area"
                      value={this.state.address.area}
                      onChange={(e) => this.OnchangeAddress(e)}
                      required={true}
                    />
                  </Col>
                </Col>
                <Col>
                  <Form.Label className={classes.FormLable}>
                    {" "}
                    Embed Map
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Map Url"
                    name="url"
                    value={this.state.address.url}
                    onChange={(e) => this.OnchangeAddress(e)}
                    required={true}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: this.state.address.url }}
                  ></div>
                </Col>
                <Col>
                  <div
                    style={{ padding: "12px", width: "100%", height: "auto" }}
                  >
                    <h4 style={{ fontWeight: "600" }}>
                      Embed a map or directions Open Google Maps
                    </h4>
                    <ol>
                      <li>Open Google Maps.</li>
                      <li>
                        Go to the directions, map, or Street View image you'd
                        like to embed.
                      </li>
                      <li>In the top left, click Menu.</li>
                      <li>Click Share or embed map.</li>
                      <li>Click Embed map.</li>
                      <li>
                        To the left of the text box, pick the size you want by
                        clicking the Down arrow .
                      </li>
                      <li>Copy the text in the box.</li>
                    </ol>
                    <img
                      src="http://extension.umaine.edu/plugged-in/wp-content/uploads/sites/54/2018/09/embed-map.jpg"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>
            {!this.state.Edit ? (
              <Button type="submit" variant="info">
                Publish
              </Button>
            ) : (
              <Button type="submit" variant="info">
                update
              </Button>
            )}
          </Form>
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps", state.user.userId);
  return {
    userId: state.user.userId,
  };
};

export default connect(mapStateToProps)(withNavigateHook(CreateProductDetails));
