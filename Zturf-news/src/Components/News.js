import React, { Component } from "react";
import NewsItems from "./NewsItems";
// import NextPreviousBtn from "./NextPreviousBtn";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `Zturf News -
            ${
              this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)
            }`;
  }

  async updateState() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let info = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: info.articles,
      totalResults: info.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateState();
    // this.fetchMoreData();
  }

  // handlePreviousPage = () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateState();
  // };

  // handleNextPage = () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateState();
  // };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=12`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let info = await data.json();
    this.setState({
      articles: this.state.articles.concat(info.articles),
      totalResults: info.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "1em" }}>
          Zturf News -
          {" " +
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            {this.state.loading && <Spinner />}
            {/* <NextPreviousBtn
            loading={this.state}
            handleNextPage={this.handleNextPage}
            handlePreviousPage={this.handlePreviousPage}
          /> */}
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-3 my-3" key={index}>
                    {!this.state.loading && (
                      <NewsItems
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageURL={element.urlToImage}
                        newsURL={element.url ? element.url : ""}
                        source={element.source.name}
                        author={!element.author ? "Unknown" : element.author}
                        date={element.publishedAt}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            {/* <NextPreviousBtn
            loading={this.state}
            handleNextPage={this.handleNextPage}
            handlePreviousPage={this.handlePreviousPage}
          /> */}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
export default News;
