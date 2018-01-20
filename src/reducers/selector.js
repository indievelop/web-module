
export const getUser = (state, login) => state.entities.users[login];
export const getPost = (state, fullName) => state.entities.post[fullName];
