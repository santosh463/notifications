function Notification(props) {
  const { className, name } = props;
  return <p className={`message ${className}`}>{name}</p>;
}

const element = (
  <div className="notification-container">
    <div className="content">
      <h1 className="heading">Notifications</h1>
      <div className="notifications">
        <div className="box primary">
          <img
            src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            className="image"
          />
          <Notification name="Information Message" className="message" />
        </div>
        <div className="box success">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            className="image"
          />
          <Notification name="Success Message" className="message" />
        </div>
        <div className="box warning">
          <img
            src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            className="image"
          />
          <Notification name="Warning Message" className="message" />
        </div>
        <div className="box danger">
          <img
            src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            className="image"
          />
          <Notification name="Error Message" className="message" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
