import React from "react";
import ReactPaginate from "react-paginate";
import { EmotionCache } from "@emotion/css";
import bootstrap from "bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Query, { LOAD_ANIMELIST } from './GraphQL/query'
import AnimeList from "./Main/AnimeList";
import AnimeDetail from "./Main/AnimeDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< AnimeList />}></Route>
        <Route exact path='/AnimeDetail/:animeid' element={< AnimeDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;