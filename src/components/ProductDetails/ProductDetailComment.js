import Avatar from "react-avatar";

const ProductDetailComment = ({ comments }) => {
  return (
    <div className="container my-5">
      {[...comments].reverse().map((item, index) => (
        <div className="row " key={index}>
          <div className="col-md-12 col-lg-12">
            <div className="text-dark py-5">
              <div className="d-flex flex-start py-12">
                {item.ProfileImg === null || item.ProfileImg === undefined ? (
                  <Avatar
                    name={item.userName}
                    size="60"
                    round={true}
                    className="rounded-circle shadow-1-strong me-3"
                  />
                ) : (
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={item.ProfileImg}
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                )}
                <div>
                  <h6 className="fw-bold mb-1">{item.userName}</h6>
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-1">
                      {item.pubDate
                        ? item.pubDate.toLocaleString("en-us", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : ""}
                      <span
                        className="badge bg-success"
                        style={{ marginLeft: "12px" }}
                      >
                        <span
                          className={
                            item.stars >= 1
                              ? "fa fa-star"
                              : item.stars >= 0.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.stars >= 2
                              ? "fa fa-star"
                              : item.stars >= 1.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.stars >= 3
                              ? "fa fa-star"
                              : item.stars >= 2.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.stars >= 4
                              ? "fa fa-star"
                              : item.stars >= 3.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.stars >= 5
                              ? "fa fa-star"
                              : item.stars >= 4.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o "
                          }
                        ></span>
                      </span>
                    </p>
                    <div className="badge bg-success"></div>
                  </div>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <hr className="my-0" />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailComment;
