import React from 'react'
import Image from 'next/image'

const ImageComponent = ({ alt, src, width, height, className, objectFit, title, priority, style }) => {

    return (
        <Image
            alt={alt || 'image'}
            loader={() => src}
            src={src || ''}
            width={width || 0}
            height={height || 0}
            className={className}
            objectFit={objectFit}
            title={title}
            priority={priority}
            style={style}
            lazyBoundary=''
        />
    )
}

export default ImageComponent