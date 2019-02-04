const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("Prev State ", store.getState());
    const result = next(action)
    console.log("New State ", store.getState());
    console.groupEnd()
}

export default logger;
