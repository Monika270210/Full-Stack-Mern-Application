
const postReducer=(posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL_POSTS':
          return action.payload;
          case 'FETCH_SEARCH_POST':
              return action.payload;
          case 'POST_NEW_DATA':
            return [...posts,action.payload];
            case 'DELETE_POST':
                return posts.filter(post=>post._id!==action.payload._id);
                case 'LIKE_POST':
                    return posts.map(post=>post._id===action.payload._id ? action.payload:post);
                    case 'UPDATE_POST':
                        return posts.map(post=>post._id===action.payload._id ? action.payload:post);
        default:
            return posts;
    }
}

export default postReducer;