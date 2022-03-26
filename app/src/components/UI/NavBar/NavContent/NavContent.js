import NavItem from "../NavItem/NavItem";

function NavContent(props) {
  return (
    <ul>
      <NavItem name={"Home"} />
      <NavItem name={"About"} />
      <NavItem name={"Contact"} />
    </ul>
  );
}

export default NavContent;
