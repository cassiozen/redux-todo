export const SHOW_ALL = 'show_all';
export const SHOW_ACTIVE = 'show_active';

export const CHANGE_FILTER = 'change_filter';

export const changeFilter = (filter) => {
  return { type: CHANGE_FILTER, filter };
}
