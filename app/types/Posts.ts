export type PostType = {
  title: string;
  id: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
    id: string;
    image: string;
  };
  Comment?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
    title: string;
    message: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};
