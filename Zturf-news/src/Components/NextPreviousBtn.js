import React, { Component } from "react";

export default class NextPreviousBtn extends Component {
  render() {
    let { loading, handleNextPage, handlePreviousPage } = this.props;
    return (
      <div className="d-flex justify-content-between">
        {!loading.loading && (
          <>
            <button
              disabled={loading.page <= 1}
              className="btn btn-secondary"
              onClick={handlePreviousPage}
            >
              &#8592; Previous
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleNextPage}
              disabled={
                loading.page + 1 > Math.ceil(loading.totalResults / 12)
              }
            >
              Next &#8594;
            </button>
          </>
        )}
      </div>
    );
  }
}
