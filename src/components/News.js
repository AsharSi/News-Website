import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

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
            // pageSize: 20,
            totalResults: 0
        }
    }

    async loadData() {
        this.setState({
            loading: true
        })

        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=${this.props.pageSize}&page=${this.state.page}`;

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                articles: data.articles,
                totalResults: data.articles.length,
                loading: false
            })
            console.log(data)
            console.log(this.state.page)

        }).catch((error) =>
            console.log(error)
        )

        // console.log(this.state.articles.totalResults)
        // console.log(this.state.totalResults)

    }

    async componentDidMount() {
        this.loadData();

        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        // fetch(url).then((response) => {
        //     return response.json();
        // }).then((data) => {
        //     this.setState({
        //         articles: data.articles,
        //         totalResults: (data.totalResults > 100) ? 100 : data.totalResults
        //     })
        // })
    }


    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=100&page=${this.state.page}`;
    //     let data = await fetch(url)

    //     let parseData = await data.json()
    //     console.log(parseData)
    //     console.log("I am in componentDidMount")

    //     this.setState({
    //         articles: parseData.articles,
    //         // totalResults: parseData.totalResults
    //     })
    // }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });

        this.loadData();

        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=${this.props.pageSize}&page=${this.state.page}`
        // let data = await fetch(url)

        // let parseData = await data.json()

        // this.setState({
        //     articles: parseData.articles,
        //     loading: false
        // });
    }

    handleNextClick = async () => {

        this.setState({
            page: this.state.page + 1
        });

        this.loadData();

        console.log((this.state.page), (this.state.pageSize))

        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=2a9c749eb0e14812a56f0a7020838337&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
        // this.setState({ loading: true })

        // let data = await fetch(url)

        // let parseData = await data.json()

        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parseData.articles,
        //     loading: false
        // });
    }

    render() {
        return (
            <>
                {/* Heading  */}
                <div className='text-center my-3'>
                    <h2>NewsMonkey - Top Headlines</h2>
                </div>

                {/* Spinner  */}
                {this.state.loading && <Spinner />}

                {/* News Items */}
                <div className='container row'>
                    {!(this.state.loading) && this.state.articles.map((element) => {
                        if (element.urlToImage && element.description && element.title)
                            return <div className='col-md-4 p-3' key={element.url}>
                                <NewsItems source={element.source} publishedAt={element.publishedAt} title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url} author={element.author} />
                            </div>
                        else
                            return null;
                    })}
                </div>

                {/* Previous and Next Buttons     */}
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page === 1} className="btn btn-info" onClick={this.handlePrevClick} type="button">
                        <strong>&larr; Previous</strong>
                    </button>
                    <button disabled={100 <= this.props.pageSize * this.state.page} className="btn btn-info" onClick={this.handleNextClick} type="button">
                        <strong>Next &rarr;</strong>
                    </button>
                </div>
            </>
        )
    }
}

// api key 83fe5edfbf3e44e2aa1f993f8f657c89
// api key 2a9c749eb0e14812a56f0a7020838337