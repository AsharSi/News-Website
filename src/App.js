import './App.css';
import { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9;

  render() {
    return (
      <>
        <div className="main-container bg-dark" >

          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category="sports" />} />
              <Route exact path="/" element={<News key="trading" pageSize={this.pageSize} category="trading" />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} category="general" />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} category="technology" />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}

// NewsApi Key = 83fe5edfbf3e44e2aa1f993f8f657c89