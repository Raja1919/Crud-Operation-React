import "./sidebar.css"

const sidebar = () => {
  return (
    <div className="sidebar bg-primary">
      <ul className="navbar-nav  sidebar text-center ">
        <li className="nav-item  mt-2">
          <a className="nav-link " href="/">
            <span className="item fs-4">Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />

        <li className="nav-item  mt-3">
          <a className="nav-link " href="/">
            <span className="item">Home</span>
          </a>
        </li>

        <li className="nav-item  mt-3">
          <a className="nav-link " href="/">
            <span className="item">about</span>
          </a>
        </li>

        <li className="nav-item  mt-3">
          <a className="nav-link " href="/">
            <span className="item">contact</span>
          </a>
        </li>

        <li className="nav-item  mt-3">
          <a className="nav-link " href="/">
            <span className="item">blog</span>
          </a>
        </li>

        <li className="nav-item  mt-3">
          <a className="nav-link " href="/">
            <span className="item">Settings</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
};
export default sidebar;
