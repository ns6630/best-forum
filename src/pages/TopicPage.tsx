import React, { useState, useEffect } from "react";
import ThreadType from "../types/ThreadType";
import * as API from "../api/API";
import Loader from "../components/Loader";
import "./TopicPage.css";
import Thread from "../components/Thread";
import { useParams } from "react-router-dom";

export interface TopicPageProps {
}

interface TopicPageParams {
  id: string;
}

export default function TopicPage(props: TopicPageProps) {
  const [threads, setThreads] = useState<ThreadType[] | null>(null);

  let { id } = useParams<TopicPageParams>();

  useEffect(() => {
    API.fetchThreads(id).then((threadsData) => setThreads(threadsData));
  }, [id]);


  console.log(threads);
  return (
    <div>
      {!threads && <Loader />}
      {threads && 
        <div className="thread-list">
          <div></div>
          {threads.map((thread) => <Thread key={thread.id} thread={thread} />)}
        </div>
      }
    </div>
  );
}
