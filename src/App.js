import React, { useReducer, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// export const TodoStateContext = React.createContext();
// export const TodoDispatchContext = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE": {
//       return [action.newItem, ...state];
//     }
//     case "UPDATE": {
//       return state.map((it) =>
//         it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
//       );
//     }
//     case "DELETE": {
//       return state.filter((it) => it.id !== action.targetId);
//     }
//     default:
//       return state;
//   }
// };

// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React.js 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "자전거타기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "친구 만나기",
//     createDate: new Date().getTime(),
//   },
// ];

function App() {
  // const [todo, dispatch] = useReducer(reducer, mockTodo);
  // const idRef = useRef(3);

  // const onCreate = (content) => {
  //   dispatch({
  //     type: "CREATE",
  //     newItem: {
  //       id: idRef.current,
  //       isDone: false,
  //       content,
  //       createDate: new Date().getTime(),
  //     },
  //   });
  //   idRef.current += 1;
  // };

  // const onUpdate = useCallback((targetId) => {
  //   dispatch({
  //     type: "UPDATE",
  //     targetId,
  //   });
  // }, []);

  // const onDelete = useCallback((targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId,
  //   });
  // }, []);
  // const memoizedDispathes = useMemo(() => {
  //   return { onCreate, onUpdate, onDelete };
  // }, []);
  return (
    <div className="App">
      <Header />
      {/* <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispathes}> */}
      <TodoEditor />
      <TodoList />
      {/* </TodoDispatchContext.Provider>
      </TodoStateContext.Provider> */}
    </div>
  );
}
{
  /* <TodoContext.Provider> Provider 뒤에 붙여야지만 값을 전달할 수 있는 능력이 생긴다 */
}
export default App;
