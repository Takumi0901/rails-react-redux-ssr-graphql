export const HELLO_WORLD_NAME_UPDATE = 'HELLO_WORLD_NAME_UPDATE'

export function updateName(text) {
  return {
    type: HELLO_WORLD_NAME_UPDATE,
    text: text
  }
}

// Reducer
export function helloWorldReducer(state = '', action) {
  const {type} = action
  switch (type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text
    default:
      return state
  }
}