import "./style.css";

const NotFound = () => (
  <div className="main flex-col">
    <img src="/NotFound-group.png" alt="not-found" className="not-found-img" />
    <h1 className="failure-heading">Page Not Found</h1>
    <p className="failure-p">
      We are sorry, the page you requested could not be found...{" "}
    </p>
  </div>
);

export default NotFound;
