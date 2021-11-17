import React from 'react';
import { AlbumCard } from './albumCard';


export const MapData = ({
    data
}) => {
    return (
       data.map(obj => {
           const id= obj.id.attributes['im:id']
           const img= obj['im:image'][2].label;
           const title= obj['im:name'].label;
           const artist= obj['im:artist'].label;
           const category= obj['category'].attributes.label;
           const url= obj.id.label;
           const release= obj['im:releaseDate'].attributes.label;
           const price= obj['im:price'].attributes;

           return (
                <AlbumCard
                    key= {id}
                    id= {id}
                    img= {img}
                    title= {title}
                    artist= {artist}
                    category= {category}
                    url= {url}
                    release= {release}
                    price= {price}
                />
           )
       })
    )
}