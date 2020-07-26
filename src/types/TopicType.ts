import User from "./UserType";

export default interface TopicType {
  id: number;
  name: string;
  description: string;
  threads: number;
  posts: number;
  lastPostUser: User;
  lastPostDate: Date;
  order?: number;
}
