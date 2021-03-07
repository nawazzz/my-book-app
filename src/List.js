import React from "react"

class List extends React.Component {

  render() {

    return(
      <div>
        <div>
          <ul id="cards-container">
            {this.props.allBooks.items && this.props.allBooks.items.map((elm, index) => {
              return (
                <div class="card" style={{width: "18rem"}} id="displayed-books-preview"  >
                  <div 
                  id="displayed-image-container"
                  >
                    <img class="card-img-top" src={elm.volumeInfo.imageLinks?.smallThumbnail } alt="Card image cap"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{elm.volumeInfo.title}</h5>
                    <p class="card-text">{elm.volumeInfo.title}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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