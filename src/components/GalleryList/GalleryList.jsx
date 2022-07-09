import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({itemList, getItems, picLikes}) {

    return (

        <>        
            {itemList.map((item, i) =>
            <>
            <GalleryItem
            itemKey={item.id}
            item={item}
            itemPath={item.path}
            itemDescription={item.description}
            itemLikes={item.likes}
            getItems={getItems}
            picLikes={picLikes}/>
            </>
            )}    
        </>
    )    
};

export default GalleryList;