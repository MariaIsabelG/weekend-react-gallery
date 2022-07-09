import {useState} from 'react';

function GalleryItem ({ item, picLikes }) {
// State for toggling functionality
    const [hidden, setHidden] = useState(true);
// Function that connects to PUT request in App.jsx    
    const handleLikes = () => {
        picLikes(item.id);
    };
// Function that handles the toggling of likes    
    const handleDescription = () => {
        setHidden(!hidden);
    }


    return (
        <>
        <div id="container">
            <div onClick={handleDescription}>
                {hidden ?
                <img className="images" src={item.path}/> :
                <p>{item.description}</p>}
            </div>
                <button className="likeBtn" onClick={handleLikes}>💙</button> 
                <p className="likes">Likes <span>{item.likes}</span></p>
            </div>
        </>
    )
};

export default GalleryItem;