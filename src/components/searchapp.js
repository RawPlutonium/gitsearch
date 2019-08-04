import React from 'react';
import Header from './header';
import SearchForm from './searchform';
import Profiles from './profiles';

const API = "https://api.github.com/";

class SearchApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:'rawplutonium',
            data:''
        }
    }
    fetchSearch = username =>{
        let url = `${API}search/users?q=${username}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                data: data
            });
        }).catch((error) => 'Oopsie! Problem detected '+ error)
    }
    componentDidMount(){
        this.fetchSearch(this.state.searchText);
    }

    render(){
        return(
            <div>
                <Header/>
                <SearchForm
                    fetchSearch={this.fetchSearch}
                />
                <Profiles
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default SearchApp;