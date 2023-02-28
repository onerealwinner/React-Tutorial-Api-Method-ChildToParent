import './SearchBar.css';
import { useState } from "react";

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm);
    }

    const handleClearForm = (e) => {
        setSearchTerm('');
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label>Enter Search Term</label>
                <input value={searchTerm} type="text" placeholder="Search Term" onChange={handleSearchChange}></input>
                <button type="submit">Search</button>
                <button type="reset" onClick={handleClearForm}>Clear Form</button>
            </form>
        </div>
    )
}

export default SearchBar;