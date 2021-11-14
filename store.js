import { createStore } from 'redux'


let store

const initialState = {
  address: undefined,
  metamask_connected: false,
  chainID: '0x1',
  web3Instance: undefined,
  contractInstance : undefined,
  totalMinted : 0
}



const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.id
      }

    case 'SET_CONNECTED':
      return {
        ...state,
        metamask_connected: action.id
      }

    case 'SET_CHAINID':
      return {
        ...state,
        chainID: action.id
      }

    case 'SET_WEB3':
      return {
        ...state,
        web3Instance: action.id
      }

      case 'SET_CONTRACT':
        return {
          ...state,
          contractInstance: action.id
        }

      case 'SET_TOTALMINTED':
        return {
          ...state,
          totalMinted : action.id
        }
    
    default:
      return state
  }
}


export function useStore() {
  const store = createStore(reducer)
  return store
}
