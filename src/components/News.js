import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page:1,
        }
    }

    async componentDidMount(){
        let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=81a62fded08c4c2ca183d7ce5953f00c&pageSize=21";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=81a62fded08c4c2ca183d7ce5953f00c&pageSize=21&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
        })
    }

    handleNextClick = async() => {
        if((this.state.page + 1) > (Math.ceil(this.state.totalResults / 21))){
        } else{
            let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=81a62fded08c4c2ca183d7ce5953f00c&pageSize=21&page=${this.state.page + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
            })
        }
    }

    render() {
        return (
            <div className="container my-2">
                <h1>NewwwsApp - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return  <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title? element.title.slice(0,45) : ""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1 } type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
