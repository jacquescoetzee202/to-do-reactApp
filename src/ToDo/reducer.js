export const addItem = (state, { value }) => {
    return {items:[
        { task: "Hello", completed: false }, 
        { task: value, completed: false }
    ]};
};