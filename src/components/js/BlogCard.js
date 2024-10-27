import React from "react";
import "../css/BlogCard.css";

const BlogCard = (props) => {
  return (
    <div className="col-md-12 col-sm-12 mb-3 puff-in-center article-card">
      <div className="card shadow border-0 rounded bg-transparent">
        <div className="card-body text-white">
          <h1 className="card-titlefs-3">
            <i class="bi bi-journal-bookmark"></i> {props.title}
          </h1>
          <h6 className="mb-3">Posted on {props.data} by Ștefan Juca</h6>
          <p className="overflow-scroll scrollbar-hidden article mx-1 px-2 fs-5">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
