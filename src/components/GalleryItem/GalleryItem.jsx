import {useState} from 'react';

function GalleryItem ({ item, picLikes }) {

    const [hidden, setHidden] = useState(true);
    
    const handleLikes = () => {
        picLikes(item.id);
    };
    
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