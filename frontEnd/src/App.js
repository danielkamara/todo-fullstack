import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from ".//components/ToDoForm";
import { useEffect } from "react";
import { fetchTodo } from "./actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

function App(props) {
  useEffect(() => {
    props.fetchTodo();
  }, []);
  return (
    <div className="App">
      <ToDoForm />
      {props.isLoading ? "TODO LIST IS LOADING" : "TODO LIST LOADED"}
      <ToDoList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

export default connect(mapStateToProps, { fetchTodo })(App);
