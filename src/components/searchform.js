import React from 'react';

class SearchForm extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <form
                    className="input-group"
                    onSubmit={this.handleForm}
                    >
                    <input 
                        type="search"
                        ref="username"
                        placeholder="Type username here"
                        className="form-control"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-warning">Submit</button>   
                    </span> 
                </form>
            </div>
        )
    }
    handleForm = event => {
        event.preventDefault()
        let username = this.refs.username.value;
        this.props.fetchSearch(username);
    }
}

export default SearchForm;