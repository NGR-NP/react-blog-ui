import React from 'react'
import styled from "styled-components";
const MainHeader = styled.div`
margin-top: 140px;
position: relative;
`;
const HeaderTitleSm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: var(--lBlack);
  text-transform: capitalize;

`;
const BlogTopic = styled.div`
height: 50px;
overflow: hidden;
position: absolute;
top: -18%;
font-size: 20px;
color: var(--lBlack);
`;
const BTWrapper = styled.div`
height: 100%;
animation: move 10s ease-in-out infinite alternate;
@keyframes move{
  25%{
      transform: translateY(-50px);
  }
  50%{
      transform: translateY(-100px);
  }
  75%{
      transform: translateY(-150px);
  }
  99%{

      transform: translateY(-0px);
    }
}
`;
const BTItem = styled.div`
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: transparent;
animation: effect 5s linear infinite;
@keyframes effect {
  0% {
    background: radial-gradient(100% 100% at 100% 0, #c9a33c 0, #c63dca 100%);
      -webkit-background-clip: text;
  }
  25% {
    background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #ff54f6 100%);
      -webkit-background-clip: text;
  }
  50%{
    background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #df62af 100%);
    -webkit-background-clip: text;
  }
  75%{
    background: radial-gradient(100% 100% at 100% 0, #fffc5a 0, #db5757 100%);
    -webkit-background-clip: text;
  }
  100% {
    background: radial-gradient(100% 100% at 100% 0, #c9a33c 0, #c63dca 100%);
      -webkit-background-clip: text;
  }
}
`;
const HeaderTitleLg = styled.span`
position: absolute;
top: -13.8%;
font-size: 100px;
text-transform: uppercase;
color: var(--lBlack);
`;
const HeaderImg = styled.img`
width: 100%;
height: 450px;
object-fit: cover;
`;

const Header = () => {
  return (
    <MainHeader>
      <HeaderTitleSm>
        <BlogTopic>
          <BTWrapper>
            <BTItem>web development</BTItem>
            <BTItem>linux</BTItem>
            <BTItem>networking</BTItem>
            <BTItem>tips & tricks</BTItem>
          </BTWrapper>
        </BlogTopic>
        <HeaderTitleLg>blog</HeaderTitleLg>
      </HeaderTitleSm>
      <HeaderImg src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="banner" />
    </MainHeader>
  )
}

export default Header;


// import "./header.css";

// export default function Header() {
//   return (
//     <div className="header">
//       <div className="headerTitles">
//         <div className="i-title">
//           <div className="i-title-wrapper">
//             <div className="i-title-item">Web Deplopment</div>
//             <div className="i-title-item">Linux</div>
//             <div className="i-title-item">Networking</div>
//             <div className="i-title-item">Tips & Tricks</div>
//           </div>
//         </div>
//         {/* <span className="headerTitleSm">Web Devlopment, Linux, Networking, Tips & Tricks</span> */}
//         <span className="headerTitleLg">BLOG</span>
//       </div>
//       <img
//         className="headerImg"
//         src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         alt=""
//       />
//     </div>
//   );
// }
