import CategoryType from "../types/CategoryType";
import ThreadType from "../types/ThreadType";

export function fetchCategories(): Promise<CategoryType[]> {
  const mockData: CategoryType[] = [
    { 
      id: 0, 
      name: "News", 
      order: 0 , 
      topics: [
        {
          id: 0,
          name: "Announcements",
          description: "News and Game Status updates",
          threads: 25404,
          posts: 339685,
          lastPostUser: {
            id: 0,
            username: "Romulas19",
          },
          lastPostDate: new Date(2020, 7, 3, 10, 18, 34),
          order: 0,
        },
        {
          id: 1,
          name: "Development Manifesto",
          description:
            "Information about our future plans and development philosophies",
          threads: 1763,
          posts: 33519,
          lastPostUser: {
            id: 1,
            username: "slaxxTB",
          },
          lastPostDate: new Date(2020, 7, 7, 15, 57, 4),
          order: 1,
        },
        {
          id: 2,
          name: "Patch Notes",
          description: "Patch notes for Path of Exile updates",
          threads: 5121,
          posts: 65677,
          lastPostUser: {
            id: 2,
            username: "TreeOfDead",
          },
          lastPostDate: new Date(2020, 7, 8, 7, 2, 48),
          order: 2,
        },
      ]
    },
    { 
      id: 1, 
      name: "Help", 
      order: 10,
      topics: [
        {
          id: 3,
          name: "Help and Information",
          description:
            "For general account and Path of Exile related queries or assistance",
          threads: 14399,
          posts: 53531,
          lastPostUser: {
            id: 3,
            username: "HanSoloDK",
          },
          lastPostDate: new Date(2020, 7, 5, 8, 9, 17),
          order: 0,
        },
        {
          id: 4,
          name: "Technical Support",
          description: "For technical support and troubleshooting",
          threads: 63163,
          posts: 281727,
          lastPostUser: {
            id: 4,
            username: "LuizBettini",
          },
          lastPostDate: new Date(2020, 7, 8, 18, 42, 3),
          order: 1,
        },
      ]
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
}

export function fetchThreads(topicId:string): Promise<ThreadType[]> {
  const mockData: ThreadType[] = [
    {
      id: 1,
      name: "Test thread",
      order: 0,
      author: {
        id: 1,
        username: "Johny"
      },
      pubDate: new Date(2020, 7, 3, 10, 18, 34),
      lastPostUser: {
        id: 1,
        username: "Johny"
      },
      lastPostDate: new Date(2020, 7, 3, 10, 18, 34),
      replies: 65,
      views: 12354,
    },
    {
      id: 2,
      name: "Test thread",
      order: 0,
      author: {
        id: 1,
        username: "Johny"
      },
      pubDate: new Date(2020, 7, 3, 10, 18, 34),
      lastPostUser: {
        id: 1,
        username: "Johny"
      },
      lastPostDate: new Date(2020, 7, 3, 10, 18, 34),
      replies: 65,
      views: 12354,
    },
    {
      id: 3,
      name: "Test thread",
      order: 0,
      author: {
        id: 1,
        username: "Johny"
      },
      pubDate: new Date(2020, 7, 3, 10, 18, 34),
      lastPostUser: {
        id: 1,
        username: "Johny"
      },
      lastPostDate: new Date(2020, 7, 3, 10, 18, 34),
      replies: 65,
      views: 12354,
    }
  ];
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  })
}