import { actionTypes } from '../constants'
import DefaultLogo from '../styles/images/logo.png';

const initialState = {
    id: 0,
    organisation_name: "Principal Talk",
    image: DefaultLogo,
    primary_color: "#3d3d3d",
    is_white: true,
    active: true,
}

/**
 * @param state
 * @param action
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
      case (actionTypes().ORGANISATION_NAVIGATION_CHANGED): {
        
        return {
          ...state,
          id: action.payload.id, 
          organisation_name: action.payload.organisation_name,
          image: action.payload.image,
          primary_color: action.payload.primary_color,
          is_white: action.payload.is_white,
          active: true,
        }
      }
    }

    return state
}