import User from "./UserType";

export default interface ThreadType {
  id: number;
  name: string;
  order: number;
  author: User;
  pubDate: Date;
  lastPostUser: User;
  lastPostDate: Date;
  replies: number;
  views: number;
}