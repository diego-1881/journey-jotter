import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
Button.propTypes = {
  type: PropTypes.oneOf(["back", "submit"]),
  onClick: PropTypes.func,
};

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
