import React from 'react';
import { AlbumCard } from '../../../commons/albumCard';


export const renderItems = ({
    item,
    index
}) => {

    const id = item.id.attributes['im:id'];
    const img = item['im:image'][2].label;
    const title = item['im:name'].label;
    const artist = item['im:artist'].label;
    const category = item['category'].attributes.label;
    const url = item.id.label;
    const release = item['im:releaseDate'].attributes.label;
    const price = item['im:price'].attributes;

    return (
        <AlbumCard
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
}