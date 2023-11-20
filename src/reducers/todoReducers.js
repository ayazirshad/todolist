const initialData = {
    list: []
}
const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                        isDone: false
                    }
                ]
            }
        case 'TOGGLE_IS_DONE':
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item
                )
            };
        case 'DELETE_TODO':
            const newList = state.list.filter((item) =>
                item.id !== action.id
            )
            return {
                ...state,
                list: newList
            }
        case 'REMOVE_TODO':
            const newlist = [];

            return {
                ...state,
                list: newlist
            }
        default: return state;
    }
}

export default todoReducers;