export const getGif = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI( category )}&api_key=C0llM2OffJkjQ0Gj9i3buVwykkW9nl8h`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs = data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url: img.images.downsized.url
        }
    })
    
    return(gifs);
}