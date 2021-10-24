import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kanban from "./components/kanban";
import uuidv4 from "uuid/v4";

function App() {
  const cards = {
    "TO DO": {
      id: uuidv4(),
      background: "#00b8ff",
      cards: [
        {
          id: uuidv4(),
          title: "Fix a major bug",
          description: "This will break the entire system",
          type: "BUG",
          assignedTo: "Eric Bachman",
        },
      ],
    },
    "IN PROGRESS": {
      id: uuidv4(),
      background: "#1500ff",
      cards: [
        {
          id: uuidv4(),
          title: "Complete all awesome features",
          description: "This will be the best feature we have developed yet",
          type: "STORY",
          assignedTo: "Pickle Rick",
        },
      ],
    },
    "DEV COMPLETE": {
      id: uuidv4(),
      background: "#3445c3",
      cards: [
        {
          id: uuidv4(),
          title: "Develop an awesome feature",
          description: "This will be the best feature we have developed yet",
          type: "TASK",
          assignedTo: "Bertram Gilfoyle",
        },
      ],
    },
    "ON TEST": {
      id: uuidv4(),
      background: "#26477e",
      cards: [
        {
          id: uuidv4(),
          title: "MVP for our amazing product",
          description: "This will be the best feature we have developed yet",
          type: "EPIC",
          assignedTo: "John Wick",
        },
      ],
    },
    DONE: {
      id: uuidv4(),
      background: "green",
      cards: [
        {
          id: uuidv4(),
          title: "Develop an awesome feature",
          description: "This will be the best feature we have developed yet",
          type: "TASK",
          assignedTo: "Bertram Gilfoyle",
        },
      ],
    },
  };
  const [displayCards, setDisplayCards] = useState(
    JSON.parse(localStorage.getItem("prevState")) || cards
  );

  useEffect(() => {
    if (!localStorage.getItem("prevState")) {
      localStorage.setItem("prevState", JSON.stringify(cards));
    }
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Header
          cards={displayCards}
          setDisplayCards={setDisplayCards}
          title="Kanban Board"
        />
        <Switch>
          <Route path="/">
            <Kanban cards={displayCards} setDisplayCards={setDisplayCards} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
