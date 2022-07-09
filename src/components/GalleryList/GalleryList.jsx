import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ itemList, getItems, picLikes}) {


    return (

        <>        
            {itemList.map((item) =>
            <GalleryItem
            item={item}
            getItems={getItems}
            picLikes={picLikes}/>

            )}    
        </>
    )    
};

export default GalleryList;