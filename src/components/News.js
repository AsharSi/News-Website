import { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import "./News.css"

export default class News extends Component {

    static defaultProps = {
        pageSize: 20,
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async loadData(number) {
        this.setState({
            loading: true
        })

        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=${this.props.pageSize}&page=${number}`;

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {

            this.setState({
                articles: data.articles,
                totalResults: data.articles.length,
                loading: false
            })

            console.log(data.articles)

        }).catch((error) =>
            console.log(error)
        )
    }

    async componentDidMount() {
        this.loadData();
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });

        this.loadData(this.state.page - 1);
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });

        this.loadData(this.state.page + 1);
    }


    render() {
        return (
            <>
                <div className='text-center text-light py-3 pt-4'>
                    <h2>NewsMonkey - Top Headlines</h2>
                </div>

                {this.state.loading ? <Spinner />
                    :
                    <>
                        <div className='news-container'>
                            {
                                this.state.articles.map((element, index) => {
                                    if (element.urlToImage && element.description && element.title)
                                        return (
                                            <NewsItems source={element.source} publishedAt={element.publishedAt} title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url} author={element.author} />
                                        )
                                    else
                                        return null;
                                })
                            }
                        </div>

                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} className="btn btn-info" onClick={this.handlePrevClick} type="button">
                                <strong>&larr; Previous</strong>
                            </button>
                            <button disabled={100 <= this.props.pageSize * this.state.page} className="btn btn-info" onClick={this.handleNextClick} type="button">
                                <strong>Next &rarr;</strong>
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// api key 83fe5edfbf3e44e2aa1f993f8f657c89
// api key 2a9c749eb0e14812a56f0a7020838337