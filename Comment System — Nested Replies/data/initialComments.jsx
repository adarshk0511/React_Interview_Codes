export const initialComments = [
  {
    id: 1,
    text: "This is the first top-level comment",
    replies: [
      {
        id: 2,
        text: "This is a reply to comment 1",
        replies: [
          {
            id: 3,
            text: "This is a reply to reply (nested level 2)",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        text: "Another reply to comment 1",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    text: "This is the second top-level comment",
    replies: [
      {
        id: 6,
        text: "Reply to second top-level comment",
        replies: [
          {
            id: 7,
            text: "Deeply nested reply (level 2)",
            replies: [
              {
                id: 8,
                text: "Even deeper reply (level 3)",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    text: "Third top-level comment with no replies",
    replies: [],
  },
];
