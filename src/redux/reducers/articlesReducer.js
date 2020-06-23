export const ContactActionType = {
    SET_ARTICLES: 'SET_ARTICLES',
    SET_ARTICLE: 'SET_ARTICLE',
};

export function setArticlesAction(articles) {
    return { type: ContactActionType.SET_ARTICLES, payload: { articles } }
}

export function setArticleAction(article) {
    return { type: ContactActionType.SET_ARTICLE, payload: { article } }
}

export function selectArticlePart(state) {
    return state.articles;
}

export function selectArticles(state) {
    return selectArticlePart(state).articles;
}

export function selectArticle(state) {
    return selectArticlePart(state).article;
}

const initialState = {
    articles: [],
    answer: null
};

export default function (
    state = initialState,
    action
) {
    
    switch (action.type) {
        case ContactActionType.SET_ARTICLES:
        return {
                ...state,
                articles: action.articles,
            };

        case ContactActionType.SET_ARTICLE:
            return {
                ...state,
                article: action.article,
            };

        default:
            return state;
    }
}
