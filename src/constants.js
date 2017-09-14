/**
 * Because Redux uses alot of action types that we might loose track of, lets define all the action types that were going to use in the app
 */
const types = {

    /** RESOURCES */
    FETCH_RESOURCES:        "FETCH_RESOURCES",
    FETCH_RESOURCES_PENDING:"FETCH_RESOURCES_PENDING",
    FETCH_RESOURCES_FULFILLED: "FETCH_RESOURCES_FULFILLED",
    FETCH_RESOURCES_REJECTED:  "FETCH_RESOURCES_REJECTED",
};

export function actionTypes() {
    return types;
};