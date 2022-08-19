import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Spinner
        animation="border"
        size="lg"
        style={{ position: "absolute", top: "40%" }}
      />
    </div>
  );
};

export default Loader;
