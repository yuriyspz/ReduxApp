export default function book(state = [], action) {
    if (action.type === "GET_ALL") {
        return action.payload
    } else if (action.type === "CREATE_BOOK") {
        return [...state,
            action.payload]
    }
    return state;
}