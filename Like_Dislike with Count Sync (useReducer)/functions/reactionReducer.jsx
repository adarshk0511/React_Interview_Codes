const ACTIONS = {
  LIKE: "LIKE",
  DISLIKE: "DISLIKE",
};

export function reactionReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LIKE: {
      if (state.userReaction === null) {
        return {
          ...state,
          likes: state.likes + 1,
          userReaction: "like",
        };
      }

      if (state.userReaction === "dislike") {
        return {
          ...state,
          likes: state.likes + 1,
          dislikes: state.dislikes - 1,
          userReaction: "like",
        };
      }

      // already liked → toggle off
      return {
        ...state,
        likes: state.likes - 1,
        userReaction: null,
      };
    }

    case ACTIONS.DISLIKE: {
      if (state.userReaction === null) {
        return {
          ...state,
          dislikes: state.dislikes + 1,
          userReaction: "dislike",
        };
      }

      if (state.userReaction === "like") {
        return {
          ...state,
          likes: state.likes - 1,
          dislikes: state.dislikes + 1,
          userReaction: "dislike",
        };
      }

      // already disliked → toggle off
      return {
        ...state,
        dislikes: state.dislikes - 1,
        userReaction: null,
      };
    }

    default:
      return state;
  }
}
