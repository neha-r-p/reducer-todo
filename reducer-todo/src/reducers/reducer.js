
export const initialState = { todos: []}

export const Reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
          return {
            ...state,
            item: action.payload,
            completed: false,
            id: new Date()
          };
        case 'TOGGLE_TODO':
          return {
            ...state,
            completed: !state.completed
          };
        case 'REMOVE_TODO':
            return {
                ...state,
                state.todos.filter(todo => todo.completed === false)

            }
        default:
          return state;
      }

}