import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav-item-link ${
          active ? "active" : ""
        }`}
        onClick={() => {   
          if (text != "Home") {
            document.getElementById('logo-ext').innerHTML = ' / ' + text;  
          } else {
            document.getElementById('logo-ext').innerHTML = '';
          }
        }}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;