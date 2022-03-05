import { Link } from "react-router-dom";
import "./topbar.css";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.button`
background: var(--readMoreButton);
border:none;
padding: 0.5rem 1rem;
border-radius: 20px;
color: var(--white);
font-weight: 600;
cursor: pointer;
transition: all 0.2s;
&:hover {
  transform: scale(1.1);
}
&:focus {
  transform: scale(0.9);
}
@media only Screen and (max-width: 40em) {
  font-size: 1.2rem;
  &:hover {
    transform: none;
  }
  &:focus {
    transform: none;
  }
}
`;
const HandburgerBtn = styled.button`
position: relative;
background-color: transparent;

transition: all 0.3s;
cursor: pointer;
display: none;
border: none;

@media only screen and (max-width: 800px){
    display: inline-block;
}
&::before,
&::after {
  content: "";
  background-color: var(--white);
  width: 2rem;
  height: 2px;
  display: inline-block;
  position: absolute;
  cursor: pointer;

  transition: all 0.3s;
}
&::before {
  top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
  transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after {
  top: ${(props) => (props.clicked ? "0" : "0.5rem")};
  transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
`;
const MobileMenu = styled.div`
display: flex;
background: linear-gradient(140deg,rgb(128, 204, 255),rgba(128, 204, 255, 0.89) 20%,rgba(234, 127, 223, 0.856) 90%);
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 100%;
left: 0;
right: 0;
opacity: ${(props) => (props.clicked ? "1" : 0)};
visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
transition: all 0.5s;
z-index: -10;
border-radius: 20px;
margin: 0.5rem;
overflow-x: hidden;
a {
  color: var(--white);
  font-weight: 600;
  font-size: 1.5rem;
  margin: 1.5rem;
  cursor: pointer;
}
// @media only screen and (max-width: 800px){
// display:none;}
`;

export default function Topbar() {
  // const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="top" id="top">

      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/posts/" >
            BLOGS
          </Link></li>
          <li className="topListItem"><Link className="link" to="/#top" >
            CONTACT
          </Link></li>
        </ul>

      </div>

      <div className="topRight">

        <div className="topRight1">
          <div className="rMain">
            <label htmlFor="searchN">
              <i className="topSearchIcon fas fa-search"></i>
            </label>
            <input className="searchB" type="search" id="searchN" placeholder="serch" />
          </div>

        </div>
        <HandburgerBtn onClick={() => handleClick()} clicked={click}>
          <span />
        </HandburgerBtn>
        <MobileMenu clicked={click}>
          <div className="rMain">
            <label htmlFor="searchN">
              <i className="topSearchIcon fas fa-search"></i>
            </label>
            <input className="searchB" type="search" id="searchN" placeholder="serch" />
          </div>
          <Link className="link" to="/" onClick={() => handleClick()}>
            HOME
          </Link>
          <Link className="link" to="/blogs/" onClick={() => handleClick()}>
            BLOGS
          </Link>
          <Link className="link" to="/contact" onClick={() => handleClick()}>
            <Button>CONTACT ME</Button>
          </Link>
        </MobileMenu>
      </div>
    </div>
  );
}
