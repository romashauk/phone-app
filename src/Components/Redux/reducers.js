import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM':
      return {
        filter: [
          ...state.items.filter(item =>
            item.name.toLowerCase().includes(action.title.toLowerCase())
          ),
        ],
        items: [...state.items],
      };
    case 'SORT_BY_ALPHABETICAL':
      return {
        filter: [
          ...state.filter.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          ),
        ],
        items: [...state.items],
      };
    case 'SORT_BY_AGE':
      return {
        filter: [...state.filter.sort((a, b) => a.age - b.age)],
        items: [...state.items],
      };
    default:
      return state;
  }
};

export default reducer;
