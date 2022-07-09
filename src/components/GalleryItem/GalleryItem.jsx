import {useState} from 'react';

function GalleryItem ({ item, picLikes }) {

    console.log( 'These are props:', item);
    
    const handleLikes = () => {
        picLikes(item.id);
    };
    
    



    return (
        <div>
            <img key={item.id} className="images" src={item.path}/>
                <div className="likeBtn">
                    <button onClick={handleLikes}>💜</button> 
                    <p>Likes <span>{item.likes}</span></p>
                </div>
        </div>
    )
};

export default GalleryItem;