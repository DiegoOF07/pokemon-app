import { useEffect, useState } from "react";


export const PokemonBienvenida = ({img, setImagen, imagenes}) => {
    const [imgs, setImgs] = useState('');
    
    const getImg = async () => {
        const response = await fetch(img.url);
        const image = await response.json();
        // console.log(image);
        setImgs(image);
    }

    useEffect(()=>{
        getImg();
        if(imgs!==''){
            setImagen(...imagenes, imgs.sprites.front_default);
        }
    },[])

  return (
    <>
        {imgs?
            <img src={imgs.sprites.front_default} alt={imgs.name}  className='portada resp'/>
            : <p>Cargando...</p>
        }
    </>
  )
}
