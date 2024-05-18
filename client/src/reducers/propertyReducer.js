const initialState = {
    properties: [],
    property: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PROPERTIES':
            return {
                ...state,
                properties: payload,
                loading: false
            };
        case 'ADD_PROPERTY':
            return {
                ...state,
                properties: [payload, ...state.properties],
                loading: false
            };
        case 'DELETE_PROPERTY':
            return {
                ...state,
                properties: state.properties.filter(property => property._id !== payload),
                loading: false
            };
        case 'PROPERTY_ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
