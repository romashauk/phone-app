import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM':
      return {
        items: [
          ...state.items.filter(item =>
            item.name.toLowerCase().includes(action.title.toLowerCase())
          ),
        ],
      };
    case 'SORT_BY_ALPHABETICAL':
      return {
        items: [
          ...state.items.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          ),
        ],
      };
    case 'SORT_BY_AGE':
      return {
        items: [...state.items.sort((a, b) => a.age - b.age)],
      };
    default:
      return state;
  }
};

export default reducer;
