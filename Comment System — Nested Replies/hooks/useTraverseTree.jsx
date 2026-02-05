const useTraverseTree = () => {
  function insertNode(comments, commentId, item, newId) {
    return comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            {
              id: newId,
              text: item,
              replies: [],
            },
            ...comment.replies,
          ],
        };
      }

      // Otherwise, recurse into replies
      return {
        ...comment,
        replies: insertNode(comment.replies, commentId, item, newId),
      };
    });
  }

  return { insertNode };
};

export default useTraverseTree;
