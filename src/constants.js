/**
 * Because Redux uses alot of action types that we might loose track of, lets define all the action types that were going to use in the app
 */
const types = {
    /** TOKEN */
    FETCH_TOKEN:            "FETCH_TOKEN",
    FETCH_TOKEN_PENDING:    "FETCH_TOKEN_PENDING",
    FETCH_TOKEN_FULFILLED:  "FETCH_TOKEN_FULFILLED",
    FETCH_TOKEN_REJECTED:   "FETCH_TOKEN_REJECTED",
    SET_TOKEN:              "SET_TOKEN",

    FETCH_AUTH_ACCESSTOKEN:       "FETCH_AUTH_ACCESSTOKEN",
    FETCH_AUTH_REFRESHTOKEN:      "FETCH_AUTH_REFRESHTOKEN",
    FETCH_AUTH_USER:              "FETCH_AUTH_USER",
    FETCH_AUTH_ERROR:             "FETCH_AUTH_ERROR",

    /** USER */
    USER_LOGGED_OUT:        "USER_LOGGED_OUT",
    USER_LOGGED_IN:         "USER_LOGGED_IN",
    FETCH_USER:             "FETCH_USER",
    FETCH_USER_PENDING:     "FETCH_USER_PENDING",
    FETCH_USER_FULFILLED:   "FETCH_USER_FULFILLED",
    FETCH_USER_REJECTED:    "FETCH_USER_REJECTED",

    /** USERS */
    FETCH_USERS:            "FETCH_USERS",
    FETCH_USERS_PENDING:    "FETCH_USERS_PENDING",
    FETCH_USERS_FULFILLED:  "FETCH_USERS_FULFILLED",
    FETCH_USERS_REJECTED:   "FETCH_USERS_REJECTED",

    /** RESOURCES */
    FETCH_RESOURCES:        "FETCH_RESOURCES",
    FETCH_RESOURCES_PENDING:"FETCH_RESOURCES_PENDING",
    FETCH_RESOURCES_FULFILLED: "FETCH_RESOURCES_FULFILLED",
    FETCH_RESOURCES_REJECTED:  "FETCH_RESOURCES_REJECTED",


    /** FEED */
    FEED_ACTION_ERROR:  'FEED_ACTION_ERROR',
    FEED_ACTION_START:  'FEED_ACTION_START',
    FEED_ACTION_SAVE:   'FEED_ACTION_SAVE',

    /** EVENT */
    EVENT_ACTION_ERROR:  'EVENT_ACTION_ERROR',
    EVENT_ACTION_START:  'EVENT_ACTION_START',
    EVENT_ACTION_SAVE:   'EVENT_ACTION_SAVE',
    EVENT_ACTION_ITEM_OPEN:   'EVENT_ACTION_ITEM_OPEN',
    EVENT_ACTION_ITEM_CLOSED:  'EVENT_ACTION_ITEM_CLOSED',

    /** RESOURCE */
    RESOURCE_ACTION_ERROR:  'RESOURCE_ACTION_ERROR',
    RESOURCE_ACTION_START:  'RESOURCE_ACTION_START',
    RESOURCE_ACTION_SAVE:   'RESOURCE_ACTION_SAVE',

    /** CONTACT */
    CONTACT_ACTION_ERROR:  'CONTACT_ACTION_ERROR',
    CONTACT_ACTION_START:  'CONTACT_ACTION_START',
    CONTACT_ACTION_SAVE:   'CONTACT_ACTION_SAVE',

    /** FEED NAVIGATION */
    FEED_NAVIGATION_CHANGED:  "FEED_NAVIGATION_CHANGED",
    
    /** ORGANISAITON */
    ORGANISATION_NAVIGATION_CHANGED:  "ORGANISATION_NAVIGATION_CHANGED",
    ORGANISATION_ACTION_ERROR:  'ORGANISATION_ACTION_ERROR',
    ORGANISATION_ACTION_START:  'ORGANISATION_ACTION_START',
    ORGANISATION_ACTION_SAVE:   'ORGANISATION_ACTION_SAVE',
};

export function actionTypes() {
    return types;
};