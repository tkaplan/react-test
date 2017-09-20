export default function(state = null, action){
  switch (action.type){
    case 'KEY_PRESSED':
      return action.payload
  }
  return state
}
