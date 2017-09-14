/**
 * Because Redux uses alot of action types that we might loose track of, lets define all the action types that were going to use in the app
 */
const types = {

    /** RESOURCES */
    RESOURCE_ACTION_START:        "RESOURCE_ACTION_START",
    RESOURCE_ACTION_ERROR:        "RESOURCE_ACTION_ERROR",
    RESOURCE_ACTION_SAVE:         "RESOURCE_ACTION_SAVE",
};

export function actionTypes() {
    return types;
};