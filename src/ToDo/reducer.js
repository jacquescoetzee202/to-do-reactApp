export const addItem = (state, { value }) => {
    return { items: [
        ...state.items,
        { task: value, completed: false },
    ]};
};

export const removeItem = ( state, { index } ) => {
    const updated = [...state.items];
    updated.splice(index,1);
    return { items: [...updated]};
}

