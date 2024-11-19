import React from 'react';

function Avatar({size, person}) {
    const getImageUrl = 'https://i.imgur.com/'
    return (
        <img 
            src={getImageUrl + person.imageId + '.jpg'} 
            alt={person.name + '님'}
            width={size}
            height={size}
        />
    );
}

export default Avatar;