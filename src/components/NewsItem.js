import React, { Component } from "react";
import noImage from "../images/noImage.jpg";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, mode, source } =
      this.props;
    return (
      <div className="my-3">
        <div
          className={`card bg-${mode === "dark" ? "dark" : "light"} text-${mode === "dark" ? "light" : "dark"
            }`} style={{
              height: '490px'
            }}
        >
          <div style={{
            display: 'flex', justifyContent: 'flex-end',
            position: 'absolute', right: '0'
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={imageUrl ? imageUrl : noImage}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <div style={{ height: '54px', overflow: 'hidden', fontSize: " 1rem", flexGrow: '1' }}>
              <span >{description}</span>
            </div>
            {/* <p className="card-text" style={{ height: '60px', overflow: 'hidden', flexGrow: '1', marginBottom: '0.2 rem' }}></p> */}
            <p className="card-text">
              <small className="fw-light text-sm">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${mode === "dark" ? "secondary" : "primary"
                }`}
              style={{ width: '18vh' }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
