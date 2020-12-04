export const addItem = (state, { value }) => {
    return { items: [
        ...state.items,
        { task: value, completed: false },
    ]};
};