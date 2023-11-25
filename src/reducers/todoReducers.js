const storedList = localStorage.getItem("list");
if (!storedList) {
  localStorage.setItem("list", JSON.stringify([]));
}
let initialData = {
  list: [],
};
if (storedList) {
  try {
    initialData = {
      list: JSON.parse(storedList),
    };
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      let lList = JSON.parse(localStorage.getItem("list"));
      const updatedList = [
        ...lList,
        {
          id: id,
          data: data,
          isDone: false,
        },
      ];
      localStorage.setItem("list", JSON.stringify(updatedList));
      return {
        ...state,
        list: updatedList, // Update state with the updated list
      };
    case "TOGGLE_IS_DONE":
      let anyList = JSON.parse(localStorage.getItem("list"));
      localStorage.setItem(
        "list",
        JSON.stringify(
          anyList.map((item) =>
            item.id === action.payload.id
              ? { ...item, isDone: !item.isDone }
              : item
          )
        )
      );
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("list")),
      };
    case "DELETE_TODO":
      let anyList2 = JSON.parse(localStorage.getItem("list"));
      localStorage.setItem(
        "list",
        JSON.stringify(anyList2.filter((item) => item.id !== action.id))
      );
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("list")),
      };
    case "REMOVE_TODO":
      const newlist = [];
      localStorage.setItem("list", JSON.stringify(newlist));
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("list")),
      };
    default:
      return state;
  }
};

export default todoReducers;
