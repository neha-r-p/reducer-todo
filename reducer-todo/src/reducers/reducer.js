
export const initialState = { todos: []}

export const Reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
          return {
            ...state,
            item: action.payload,
          };
        case 'TOGGLE_TODO':
          return {
            ...state,
            completed: !state.completed
          };
        case 'REMOVE_TODO':
            return {
                ...state,

            }
        default:
          return state;
      }

}