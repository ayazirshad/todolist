export const addToDo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            isDone: false
        }
    }
}
export const deleteToDo = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}
export const removeToDo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}
export const toggleToDo = (id) => {
    return {
        type: 'TOGGLE_IS_DONE',
        payload: {
            id: id
        }
    }
}
