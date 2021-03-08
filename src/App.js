import React from "react"
import './App.scss';
import List from "./List"
import BookDetails from "./bookDetails"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBooks: {},
      query: "",
      isLoading: false,
      selectedBook: {},
      isBookDetailOpen: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const url = `https://www.googleapis.com/books/v1/volumes?q="a"`;
    fetch(url).then(res => res.json()).then(data => {
        this.setState({
          allBooks: data,
          isLoading: false,
        })
    }).catch(error => console.log(error));
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
      fetch(url).then(res => res.json()).then(data => {
        this.setState({
          allBooks: data,
          isLoading: false,
        })
      }).catch(error => console.log(error));
    }
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value,
      allBooks: {},
      isLoading: true,
    })
  }
  handleBookSelection = (elm) => {
    this.setState({
      selectedBook: elm,
      isBookDetailOpen: true
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isBookDetailOpen ? (
          <BookDetails allBooks={this.state.allBooks} selectedBook={this.state.selectedBook}/>
        ) : (
        <React.Fragment>
          <div className="input-parent-container">
            <input type="text" value={this.state.query} placeholder="Enter book name"    
            onChange={this.handleSearch}
            />
            
      
            {this.state.isLoading ? (
              <div>
                <div style={{
                  textAlign: 'center'
                }}>
                  <span>Loading...</span>
                </div>
              </div>
            ) : (
              <List allBooks={this.state.allBooks} filterBooksFromSearch={this.filterBooksFromSearch} handleBookSelection={this.handleBookSelection}/>
            )}
          </div>
      </React.Fragment> 
    )}
    </React.Fragment>    
    )}
}

export default App;
