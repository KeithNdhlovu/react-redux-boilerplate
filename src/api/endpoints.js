const endpoints = {
    //Map database names
    APIID: "API_ID",
    CHILDID: "CHILD_ID",
    SCHOOLID: "SCHOOL_ID",

    DO_LOGIN: "/login",
    DO_LOGIN_REFRESH: "/login/refresh",

    GET_ME: "/me",

    DATEFORMAT: "yyyy-MM-dd'T'HH:mm:ss'Z'",

    
    AUTHENTICATE_ENDPOINT: "/login/authenticate",
    CHILDREN_ENDPOINT: "/me/children",
    
    LOGIN_ENDPOINT: "/login",
    REGISTRATIONSTATUS_ENDPOINT: "/me/children/registrationstatuses",
    UPCOMMINGASSESSMENTS_ENDPOINT: "/me/children/upcomingassessments",
    RESULTS_ENDPOINT: "/me/children/results",
    DISIPLINARIES_ENDPOINT: "/me/children/disciplinaries",
    TIMETABLES_ENDPOINT: "/me/children/timetables",
    
    SENDCHATGROUPMESSAGE_ENDPOINT: "/send/group/%s",
    ENQUIRY_ENDPOINT: "/me/generalenquiry",
    ABSENTREPORT: "/children/%s/absenteereports",
    ABSENTREPORTGET: "/me/children/absenteereports",
    ENROLSTATUS: "/me/children/%s/registrationstatuses/plansnextyear",
    NOTICE_ENDPOINT: "/me/notices",

    UPDATE_LEARNER_ENDPOINT: "/me/children/%s",
    GALLERY_IMAGE_ENDPOINT: "/me/groups/images",
    GALLERY_IMAGE_POST_ENDPOINT: "/me/groups/images/upload",
    UPDATE_CHILD_ENDPOINT: "/me/children/%s",
    ADD_CHILD_ENDPOINT: "/me/children/add",
    GET_VIEWERS: "/me/children/viewers",
    TS_CS: "/agreement",

    GET_FEED: "/me/notices",
    DO_FEED_READ: "/me/feed/%s/read",
    DO_FEED_UNREAD: "/me/feed/%s/unread",

    GET_RESOURCES: "/me/resources",
    GET_RESOURCES_SCHOOL: "/me/resources/school/%s",
    GET_RESOURCES_LEARNER: "/me/resources/learner/%s",
    DO_RESOURCE_READ: "/me/resources/%s/read",
    DO_RESOURCE_UNREAD: "/me/resources/%s/unread",

    GET_HOMEWORK: "/me/children/homework",
    DO_HOMEWORK_READ: "/me/children/homework/%s/read",
    DO_HOMEWORK_UNREAD: "/me/children/homework/%s/unread",    

    SCHOOL_NOTICE: "/me/notices",
    GROUP_NOTICE: "/me/groups/notices",
    GROUP_NOTICE_POST_ENDPOINT: "/me/groups/messages/send",
    USER_PROFILE: "/me/profiles",
    REGISTRATION_ENDPOINT: "/register/manual",
    REGISTRATION_TOKEN_ENDPOINT: "/register/token",
    RECOVER_PASSWORD_ENDPOINT: "/login/recover",

    GET_ORGANISATIONS: "/me/schools",
    GET_ORG_ACCOUNTSTATEMENT_ENDPOINT: "/me/schools/accountstatements",
    GET_ORG_ABSENTEE_REASONS_ENDPOINT: "/me/schools/absenteeismreasons",
    GET_ORG_POLICIES_ENDPOINT: "/me/schools/policies",
    GET_ORG_CODEOFCONDUCT_ENDPOINT: "/me/schools/codeofconduct",

    GET_USER_EVENTS_ENDPOINT: "/me/events",
    GET_GROUP_EVENTS_ENDPOINT: "/me/groups/events",

    GET_GROUPS_ENDPOINT: "/me/groups",

    CODE_OF_CONDUCT_TITLE: 0,
    ACCOUNT_STATEMENT_TITLE: 1,
    REGISTRATION_STATUS_TITLE: 2,
    RESULT_TITLE: 3,
    DISCIPLINARY_TITLE: 4,
    TIMETABLE_TITLE: 5,
    UPCOMING_ASSESSMENT_TITLE: 6,

    LANG_AFR: "af",
    LANG_ENG: "en",
}

export default endpoints;