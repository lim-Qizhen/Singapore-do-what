import React, {useState} from 'react';

const Search = (props) => {
    const [query, setQuery] = useState("")

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query)
        setQuery("")
    }
    
    return (
        <form onSubmit = {handleSubmit} style = {{textAlign: "center"}}>
            <p style={{fontFamily: "Corinthia, cursive", fontSize: "30px"}}>What would you like to do?</p>
            <input style = {{width: "200px", margin: "2px"}} placeholder = "keyword" value={query} onChange = {handleChange}></input> 
            <button onClick = {handleSubmit} type="submit">Search</button>
        </form>
    );
};

export default Search;