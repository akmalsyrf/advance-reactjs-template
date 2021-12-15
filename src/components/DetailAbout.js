// import package for property types
import PropTypes from "prop-types";

// create component here
export default function DetailAbout(props) {
  return (
    <>
      <h1>Title : {props.title}</h1>
      <p>Summary : {props.summary}</p>
      <p>Total Guest : {props.total}</p>
    </>
  );
}

// define property type for this component here
DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  total: PropTypes.number, //error muncul di console
};
