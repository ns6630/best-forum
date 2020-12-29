import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";

function App() {
  return (
    <DefaultLayout>
      <Header></Header>

      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/topic/:id">
            <TopicPage />
          </Route>
        </Switch>
      </PageContent>

      <Footer></Footer>
    </DefaultLayout>
  );
}

export default App;
