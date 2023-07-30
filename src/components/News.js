import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=83fe5edfbf3e44e2aa1f993f8f657c89&pageSize=20&page=${this.state.page}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                articles: data.articles,
                totalResults: (data.totalResults > 100) ? 100 : data.totalResults
            })
            console.log(this.state.totalResults)
        })
    }


    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=83fe5edfbf3e44e2aa1f993f8f657c89&pageSize=100&page=${this.state.page}`;
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
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=83fe5edfbf3e44e2aa1f993f8f657c89&pageSize=20&page=${this.state.page - 1}`
        let data = await fetch(url)

        let parseData = await data.json()
        // console.log(parseData)
        
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        });
        // this.componentDidMount();
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=83fe5edfbf3e44e2aa1f993f8f657c89&pageSize=20&page=${this.state.page + 1}`
        let data = await fetch(url)

        let parseData = await data.json()
        // console.log(parseData)
        
        this.setState({
             page: this.state.page + 1,
             articles: parseData.articles
        });
        console.log(this.state.page)
        console.log(this.state.totalResults)
        // this.componentDidMount();
    }

    render() {
        console.log("I am in render")
        return (
            <>
                <div className='text-center my-3'>
                    <h2>NewsMonkey - Top Headlines</h2>
                </div>
                <div className='container row'>
                    {this.state.articles.map((element) => {
                        if (element.urlToImage && element.description && element.title)
                            return <div className='col-md-4 p-3' key={element.url}>
                                <NewsItems title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url} />
                            </div>
                        else
                            return null;
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page === 1} className="btn btn-info" onClick={this.handlePrevClick} type="button">
                        <strong>&larr; Previous</strong>
                    </button>
                    <button disabled={(this.state.page) * this.state.pageSize >= this.state.totalResults} className="btn btn-info" onClick={this.handleNextClick} type="button">
                        <strong>Next &rarr;</strong>
                    </button>
                </div>
            </>
        )
    }
}

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

//     constructor(){
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page:1
//         }
//     }

//     async componentDidMount(){ 
//         let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=20";
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData); 
//         this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
//     }

//      handlePrevClick = async ()=>{
//         console.log("Previous");
//         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);  
//         this.setState({
//             page: this.state.page - 1,
//             articles: parsedData.articles
//         })

//     }
    
//      handleNextClick = async ()=>{
//         console.log("Next"); 
//         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

//         }
//         else{
//             let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
//             let data = await fetch(url);
//             let parsedData = await data.json()
//             console.log(parsedData);  
//             this.setState({
//                 page: this.state.page + 1,
//                 articles: parsedData.articles
//             })
//     }
//     }

//     render() { 
//         return (
//             <div className="container my-3">
//                 <h1>NewsMonkey - Top Headlines</h1> 
//                 <div className="row"> 
//                 {this.state.articles.map((element)=>{
//                     return <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                     </div> 
//                 })} 
//                 </div> 
//                 <div className="container d-flex justify-content-between">
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                 <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News