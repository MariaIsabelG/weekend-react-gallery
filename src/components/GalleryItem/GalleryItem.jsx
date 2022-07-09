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
        <div onClick={handleDescription}>
            {hidden ?
            <img key={item.id} className="images" src={item.path}/> :
            <p>{item.description}</p>}
        </div>
        <div className="likeBtn">
            <button onClick={handleLikes}>💜</button> 
            <p>Likes <span>{item.likes}</span></p>
        </div>
        </>
    )
};

export default GalleryItem;