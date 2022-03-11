import data from "../dummyData";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
} from "../actions/actions";

const initialState = {
  ToDoData: data,
  isLoading: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_START:
      return {
        ...state,
        ToDoData: state.ToDoData,
        error: "",
        isLoading: true,
      };
    case FETCH_TODO_FAIL:
      return {
        ...state,
        ToDoData: state.ToDoData,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        ToDoData: action.payload,
        error: "",
        isLoading: false,
      };
    case ADD_TODO:
      return {
        ...state,
        ToDoData: [...state.ToDoData, action.payload],
        isLoading: false,
      };
    case REMOVE_TODO:
      let newState = state.ToDoData.filter((item) => item !== action.payload);
      return {
        ...state,
        ToDoData: newState,
      };
    case UPDATE_TODO:
      let updateState = state.ToDoData.map((todo) => {});
      console.log(action.payload);
      return {
        ...state,
        ToDoData: action.payload,
      };
    default:
      return state;
  }
}