import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({itemList, getItems, picLikes}) {

    return (

        <div>        
            {itemList.map((item, i) =>
            <>
            <img key={i} className="images" src={item.path}/>
            <GalleryItem
            key={item.id}
            item={item}
            itemPath={item.path}
            itemDescription={item.description}
            itemLikes={item.likes}
            getItems={getItems}
            picLikes={picLikes}/>
            </>
            )}    
        </div>
    )    
};

export default GalleryList;