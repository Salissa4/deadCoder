import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Questions from "./pages/Questions/Questions";
import Games from "./pages/Games/Games";
import Tetris from "./pages/Tetris/Tetris";
import Avatars from "./pages/Avatars/Avatars";
import Lights from "./pages/LightsOut/lightsOut";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/tetris" element={<Tetris />} />
          <Route path="/games/lights-out" element={<Lights />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
