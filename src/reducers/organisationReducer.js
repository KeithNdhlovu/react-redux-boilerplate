import { actionTypes } from '../constants'
import DefaultLogo from '../styles/images/logo.png';

/**
 * This function blends two colors depending on the @param p, they will go darker or lighter
 * @param c0: the color which has to be lightened or darkened
 * @param c1: the light color
 * @param p: this is the opacity
 * @return Hexadecimal string represantation of the blended color
 */
const blendColors = (c0, c1, p) => {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

const initOrganisation = {
    id: null,
    name: "Principal Talk",
    medium_name: null,
    short_name: null,
    show_adverts: false,
    color: "#3d3d3d",
    accent: blendColors("#3d3d3d","#000000", 0.5),
    logo: DefaultLogo,
    telephone_number: null,
    email_address: null,
    physical_address: null,
    url: null,
    active: true,
}

const initialState = {
  organisation: initOrganisation,
  organisations: []
}

function addAccent(payload) {
    return {
        ...payload,
        accent: blendColors("#"+payload.color,"#000000", 0.5)
    }
}
/**
 * @param state
 * @param action
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
      case actionTypes().ORGANISATION_ACTION_START: {
          return {...state, fetching: true}
      };
      case actionTypes().ORGANISATION_ACTION_ERROR: {
          return {...state, fetching: false, error: action.payload}
      };
      case actionTypes().ORGANISATION_ACTION_SAVE: {
          return {...state,fetching: false, organisations: action.payload.results}
      };
      case (actionTypes().ORGANISATION_NAVIGATION_CHANGED): {
          return { ...state, active: true, organisation: addAccent(action.payload) }
      }
    }

    return state
}