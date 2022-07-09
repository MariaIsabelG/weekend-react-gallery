import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ itemList, getItems, picLikes}) {


    return (

        <>        
            {itemList.map((item) =>
            <GalleryItem
            key={item.id}
            item={item}
            getItems={getItems}
            picLikes={picLikes}/>
            )}    
        </>
    )    
};

export default GalleryList;