
const postReducer=(posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL_POSTS':
          return action.payload;
          case 'POST_NEW_DATA':
            return [...posts,action.payload];
            case 'DELETE_POST':
                return posts.filter(post=>post._id!==action.payload);
                case 'LIKE_POST':
                    return posts;
                    case 'UPDATE_POST':
                        return posts.filter(post=>post._id!==action.payload._id ? post:action.payload);
        default:
            return posts;
    }
}

export default postReducer;