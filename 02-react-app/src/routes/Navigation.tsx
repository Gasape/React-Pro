import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from "../03-forms/pages"; // 03-forms
// import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage"; 02-components-patterns

export const Navigation = () => {
  return (

    // 01-Lazyload
    // <Suspense fallback={ <span>Loading...</span> }>
    //   <BrowserRouter>
    //     <div className="main-layout">
    //       <nav>
    //         <img src={logo} alt="React Logo" />
    //         <ul>
    //           {routes.map( (route) => (
    //             <li key={route.path}>
    //               <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
    //             </li>
    //           ) )}
    //         </ul>
    //       </nav>

    //       <Routes>
    //           {routes.map( (route) => (
    //             <Route key={route.path} path={route.path} element={ <route.Component/> } />

    //           ) )}

    //         <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </Suspense>




    // 02-components-patterns
    // <BrowserRouter>
    //   <div className="main-layout">
    //     <nav>
    //       <img src={logo} alt="React Logo" />
    //       <ul>
    //         <li>
    //           <NavLink
    //             to={"/"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             Shopping
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to={"/about"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to={"/users"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             Users
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </nav>


    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to={"/register"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-basic"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-yup"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-components"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-abstraction"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-register"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dynamic-form"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                DynamicForm
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/formik-yup" element={<FormikYupPage/>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />

          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>

    // Base de router
    // <BrowserRouter>
    //   <div className="main-layout">
    //     <nav>
    //       <img src={logo} alt="React Logo" />
    //       <ul>
    //         <li>
    //           <NavLink
    //             to={"/"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to={"/about"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to={"/users"}
    //             className={({ isActive }) => (isActive ? "nav-active" : "")}
    //           >
    //             Users
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/about" element={<h1>About</h1>}/>
    //       <Route path="/users" element={<h1>Users</h1>}/>
    //       <Route path="/home" element={<h1>Home</h1>}/>

    //       <Route path="/*" element={<Navigate to="/" replace />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
};
