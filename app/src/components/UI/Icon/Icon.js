import "./Icon.css";

function Icon(props) {
  return (
    <div
      className={`hamburger ${props.status ? "is-active" : ""}`}
      id="hamburger-1"
      onClick={props.toggleMenu}
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  );
}

export default Icon;
