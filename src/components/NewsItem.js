import React, { Component } from "react";
import noImage from "../images/noImage.jpg";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, mode } =
      this.props;
    return (
      <div className="my-3">
        <div
          className={`card bg-${mode === "dark" ? "dark" : "light"} text-${
            mode === "dark" ? "light" : "dark"
          }`}
        >
          <img
            src={imageUrl ? imageUrl : noImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-mutted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${
                mode === "dark" ? "secondary" : "primary"
              }`}
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
