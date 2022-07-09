import {useState} from 'react';

function GalleryItem ({itemKey, item, itemPath, itemDescription, itemLikes, getItems, picLikes }) {

    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
        setLikes( likes + 1);
    }

    return (
        <div>
            <img key={itemKey} className="images" src={item.path}/>
                <div className="likeBtn">
                    <button onClick={handleLikes}>💜</button> 
                    <p>Likes <span>{likes}</span></p>
                </div>
        </div>
    )
};

export default GalleryItem;