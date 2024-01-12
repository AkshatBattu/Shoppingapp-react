import React, { useState } from "react";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const myState = useSelector((state) => state.changeTheNumber);
  const [isToggled, setIsToggled] = useState(false);
  console.log("isToggled", isToggled);
  return (
    <div>
      <div className="navDiv">
        <nav className="navbar navbar-expand-lg navbar-fixed-top ">
          <div className="svg">
            <a>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="60pt"
                height="50pt"
                viewBox="0 0 150 300"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M0 1200 l0 -1200 1200 0 1200 0 0 1200 0 1200 -1200 0 -1200 0 0
-1200z m1048 268 c97 -214 179 -388 183 -388 3 0 75 174 160 388 l155 387 222
3 c263 3 263 3 152 -100 l-70 -64 0 -475 0 -475 70 -69 c39 -38 70 -75 70 -82
0 -10 -66 -13 -315 -13 -242 0 -315 3 -315 12 0 7 32 44 70 83 l70 71 -2 368
-3 369 -177 -449 c-171 -436 -177 -449 -203 -449 -26 0 -36 20 -231 445 -112
245 -206 449 -208 455 -3 5 -5 -137 -5 -316 l-1 -327 95 -115 c52 -64 95 -123
95 -131 0 -14 -28 -16 -240 -16 -202 0 -240 2 -240 14 0 8 24 43 53 78 29 35
72 87 95 116 l42 54 0 393 0 393 -85 102 c-47 56 -85 108 -85 116 0 12 37 14
236 12 l236 -3 176 -387z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>

          <a className="navbar-brand" href="/">
            Minimal
          </a>

          <div className="navbar-toggler">
            <button onClick={() => setIsToggled(!isToggled)}>
              <span className="navbar-toggler-icon"> </span>
            </button>
            <Toggle isToggled={isToggled} />
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Items
                </a>
              </li>
            </ul>
                  
            <a className= "cart" href="/"> <i className="ri-shopping-cart-line"  ></i>  <sup>{myState}</sup> </a>      
             
            
       
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav `,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const App = () => (
//   <Layout>
//     <Header className="header">
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//     </Header>
//     <Content
//       style={{
//         padding: '0 50px',
//       }}
//     >
//       <Breadcrumb
//         style={{
//           margin: '16px 0',
//         }}
//       >
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <Layout
//         className="site-layout-background"
//         style={{
//           padding: '24px 0',
//         }}
//       >
//         <Sider className="site-layout-background" width={200}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Content
//           style={{
//             padding: '0 24px',
//             minHeight: 280,
//           }}
//         >

//         </Content>
//       </Layout>
//     </Content>
//     <Footer
//       style={{
//         textAlign: 'center',
//       }}
//     >
//       Ant Design ©2018 Created by Ant UED
//     </Footer>
//   </Layout>
// );
// export default App;
