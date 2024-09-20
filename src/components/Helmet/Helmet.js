const Helmet = (props) => {
  document.title = "Rent MotorCycle Service - " + props.title;
  return <div className="w-100">{props.children}</div>
};

export default Helmet;