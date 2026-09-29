import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.card}>
      <h1>Welcome Back!</h1>
      <button onClick={props.onLogout} className={classes.btn}>
        Logout
      </button>
    </div>
  );
};

export default Home;