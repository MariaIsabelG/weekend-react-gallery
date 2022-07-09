// import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({itemList}) {

    return (

        <div>        
            {itemList.map((item, i) => {
            return (<img key={i} className="images" src={item.path}/>)
            })} 
        </div>
    )    
};

export default GalleryList;