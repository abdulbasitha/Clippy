import { ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE, DELETE_ARTICLE_COLLECTION } from './actionTypes'

const initialState = {
    articles:[]
}
export default function (state = initialState, actions) {
    switch (actions.type) {

        case ADD_ARTICLE:
            return {
                ...state,
                articles:[...state.articles,actions.payload]
            }
        case UPDATE_ARTICLE:
            const { id, title, collection_id, url, photo_url, is_read,timestamp } = actions.payload;
            const index = state.articles.findIndex(item => item.id == actions.payload.id);
            const newArray = [...state.articles];
            newArray[index].title = title
            newArray[index].collection_id = collection_id
            newArray[index].url = url
            newArray[index].photo_url = photo_url
            newArray[index].is_read = is_read
            newArray[index].timestamp = timestamp

            return {
                ...state,
                articles: newArray,
            }
            case DELETE_ARTICLE:
                return {
                    ...state,
                    articles: state.articles.filter(item => item.id != actions?.payload?.id)
                }
            case DELETE_ARTICLE_COLLECTION:
                    return {
                        ...state,
                        articles: state.articles.filter(item => item.collection_id != actions?.payload?.id)
                    }

        default: return state;
    }
}