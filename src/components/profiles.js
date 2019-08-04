import React from 'react';

const Profiles = props =>{
    if(props.data){
        let data = props.data;
        if(data.message === 'Not Found'){
            return(
                <div className="notfound">
                    <h1> Oops !!!!</h1>
                    <p>We couldn't find the component you were looking for. Pole Sana. Try again. </p>

                </div>
            );
        }
        else{
            //Map users into JSX elements
            let userList = data.items.map((name) => {
                return(
                    <a key={name.id} 
                       href={name.html_url}
                       target="blank"
                    >
                        <div className="bs-callout bs-callout-info">
                            <img className="user"
                                 src={name.avatar_url}
                                 alt={`${name.login}`}
                            />
                            <h4>Username : {name.login}</h4>
                            <p> Url : {name.html_url}</p>
                            <p> Score : {name.score}</p>
                        </div>
                    </a>

                );
            })
            //render
            return(
                <div>{userList}</div>
            );
        }
    }
    else{
        return <div> Fetching Data ...</div>
    }

}

export default Profiles;