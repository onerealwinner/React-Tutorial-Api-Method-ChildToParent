import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
    const [imageList, setImageList] = useState([]);
    
    const handleSearch = async (term) => {
        const result = await searchImages(term);
        setImageList(result);
        console.log(result);
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}  />
            <ImageList images={imageList} />
        </div>
    )
}

export default App;