import React from "react"

class List extends React.Component {

  render() {

    return(
      <div>
        <div>
          <ul id="cards-container">
            {this.props.allBooks.items && this.props.allBooks.items.map((elm, index) => {
              return (
                <div class="card" id="displayed-books-preview"  >
                  <div 
                  id="displayed-image-container"
                  >
                    <img class="card-img-top" src={elm.volumeInfo.imageLinks?.smallThumbnail } alt="Card image cap"/>
                  </div>
                  <div class="card-body" id="title-description">
                    <h5 class="card-title" id="book-title">{elm.volumeInfo.title.slice(0, 25) + "..."}</h5>
                    <p class="card-text" id="book-description">{elm.volumeInfo.description?.slice(0, 30) && elm.volumeInfo.description?.slice(0, 50) + "..."  || "n/a" }</p>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )

  }
}
export default List;