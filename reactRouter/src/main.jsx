import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="myapps" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link to="/learn/courses">Courses</Link> |
      <Link to="/learn/bundles"> Bundles</Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Course List</h1>
      <p>More Tests</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : "gray",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>{" "}
      |<NavLink to={`/learn/courses/tests`}> tests</NavLink>
      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundle List</h1>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  return (
    <div>
      <h1>URL params is : {courseId}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseId });
        }}
      >
        Price
      </button>
      <Link to="/dashboard" state={"NodeJs"}>
        Test link
      </Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is {location.state} </h1>
    </div>
  );
}
