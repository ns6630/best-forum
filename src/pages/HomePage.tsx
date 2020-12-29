import React, { useState, useEffect } from "react";
import * as API from "../api/API";
import CategoryType from "../types/CategoryType";
import Loader from "../components/Loader";
import TopicType from "../types/TopicType";
import Topic from "../components/Topic";
import Category from "../components/Category";

export interface HomePageProps {}

export interface CategoryTopics {
  categoryId: number;
  topics: TopicType[] | null;
}

export default function HomePage(props: HomePageProps) {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);

  useEffect(() => {
    API.fetchCategories().then((categoriesData) =>
      setCategories(categoriesData)
    );
  }, []);

  return (
    <div>
      {!categories && <Loader />}
      {categories &&
        categories.map((category, index) => {
          if (index === 0) {
            return (
              <Category key={category.id} name={category.name} initialExpanded={true}>
                {category.topics.map((topic) => {
                  return <Topic key={topic.id} topic={topic} />;
                })}
              </Category>
            );
          } else {
            return (
              <Category key={category.id} name={category.name}>
                {category.topics.map((topic) => {
                  return <Topic key={topic.id} topic={topic} />;
                })}
              </Category>
            );
          }
        })}
    </div>
  );
}
