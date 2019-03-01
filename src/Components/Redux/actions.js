import axios from 'axios';
export const AddItem = id => ({
  type: 'ADD_ITEM',
  id,
});
