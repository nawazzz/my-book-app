import React from "react"
import placeholder from "./placeholder.jpg"

class List extends React.Component {

  render() {

    return(
      <React.Fragment>
          <ul className="cards-container" style={{cursor: "pointer"}}>
            {this.props.allBooks.items && this.props.allBooks.items.map((elm, index) => {
              return (
                <div class="card" className="displayed-books-preview" onClick={() => this.props.handleBookSelection(elm)} >
                  <div 
                  id="displayed-image-container"
                  >
                    <img class="card-img-top" src={elm.volumeInfo.imageLinks?.smallThumbnail || placeholder } alt="Card image cap"/>
                  </div>
                  <div class="card-body" className="title-description">
                    <h5 class="card-title" className="book-title">{elm.volumeInfo.title.slice(0, 25) + "..."}</h5>
                    <p class="card-text" className="book-description">{elm.volumeInfo.description?.slice(0, 30) && elm.volumeInfo.description?.slice(0, 50) + "..."  || "n/a" }</p>
                  </div>
                </div>
              )
            })}
          </ul>
      </React.Fragment>
    )

  }
}
export default List;