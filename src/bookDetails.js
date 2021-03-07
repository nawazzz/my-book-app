import React from "react"
import "./bookDetails.scss"

class BookDetails extends React.Component {

  render() {
    return(
      <div className="body">
        <div className="mainContainer">
          <div className="bookCoverImage">
            <img src="http://books.google.com/books/content?id=x6aeDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"/>
          </div>
          <div className="bookInfoContainer">
            <div className="bookTitleContainer">
              <h5 className="bookTitle">A Practical Guide to Federal Evidence</h5>
              <h6 className="authorName">Anthony J. Bocchino</h6>
              <p className="publisher">Aspen Publishers</p>
            </div>
            <div className="pricingContainer">
              <div>
                <a href="#">Add to Wishlist</a>
              </div>
              <div className="priceButtonContainer">
                <div>
                  <a href="#">Free sample</a>
                </div>
                <div>
                  <a href="#">€4.99 Ebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="priceDropOffer">
          <p>62% priceDropOffer</p>
        </div>
      </div>
    )
  }

}
export default BookDetails;

const allBooks = {
  "allBooks": {
    "kind": "books#volumes",
    "totalItems": 3209,
    "items": [{
      "kind": "books#volume",
      "id": "x6aeDwAAQBAJ",
      "etag": "Kehq3ETHHIg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/x6aeDwAAQBAJ",
      "volumeInfo": {
        "title": "A Practical Guide to Federal Evidence",
        "subtitle": "Objections, Responses, Rules, and Practice Commentary",
        "authors": [
          "Anthony J. Bocchino",
          "David A. Sonenshein"
        ],
        "publisher": "Aspen Publishers",
        "publishedDate": "2018",
        "description": "\"This expanded edition reflects changes and restyling to the Federal Rules of Evidence through December 1, 2014.\"",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781601567673"
          },
          {
            "type": "ISBN_10",
            "identifier": "1601567677"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 340,
        "printType": "BOOK",
        "categories": [
          "Law"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=x6aeDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=x6aeDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=x6aeDwAAQBAJ&pg=PA285&dq=%22a%22&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=x6aeDwAAQBAJ&dq=%22a%22&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/A_Practical_Guide_to_Federal_Evidence.html?hl=&id=x6aeDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=x6aeDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "(ii) <b>a</b> matter observed while under <b>a</b> legal duty to report, but not including, in <b>a</b> <br>\ncriminal case, <b>a</b> matter observed by law enforcement personnel; or (iii) in <b>a</b> civil <br>\ncase or against the government in <b>a</b> criminal case, factual findings from <b>a</b> legally<br>\n&nbsp;..."
      }
    }]
  }
}