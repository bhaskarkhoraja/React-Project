import React, { Component } from "react";
import NoPreview from "../Asset/no_preview.jpg";

export class NewsItems extends Component {
  render() {
    const styleh1 = {
      height: "3.8em",
      width: "100%",
      overflow: "hidden",
    };
    const style = {
      height: "4.8em",
      width: "100%",
      overflow: "hidden",
    };
    let { title, description, imageURL, newsURL, source, author, date } =
      this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
            {source}
          </span>
          <img
            src={imageURL === null ? NoPreview : imageURL}
            className="card-img-top"
            alt="Failed to load"
            style={{ height: "13em", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={styleh1}>
              {title}...
            </h5>
            <p className="card-text" style={style}>
              {description}...
            </p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
