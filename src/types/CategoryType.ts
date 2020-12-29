import TopicType from "./TopicType";

export default interface CategoryType {
  id: number;
  name: string;
  order: number;
  topics: TopicType[];
}
