import React from "react";
import noImage from "../images/noImage.jpg";

const NewsItem = (props) => {

  return (
    <div className="my-3">
      <div
        className={`card bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"
          }`} style={{
            height: '520px'
          }}
      >
        <div style={{
          display: 'flex', justifyContent: 'flex-end',
          position: 'absolute', right: '0'
        }}>
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>

        <img
          src={props.imageUrl ? props.imageUrl : noImage}
          className="card-img-top"
          alt="..."
          style={{ height: "250px" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <div style={{ height: '54px', overflow: 'hidden', fontSize: " 1rem", flexGrow: '1' }}>
            <span >{props.description}</span>
          </div>

          <p className="card-text">
            <small className="fw-light text-sm">
              By {props.author ? props.author : "Unknown"} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={props.newsUrl}
            target="_blank"
            className={`btn btn-sm btn-${props.mode === "dark" ? "secondary" : "primary"
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

export default NewsItem;
