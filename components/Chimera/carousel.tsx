import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
    "/chimera/2mathura.jpg",
    "/chimera/4indore2.jpg",
    "/chimera/5pune.jpg",
    "/chimera/6jaipur.jpg",
    "/chimera/7jbp_low.jpg"
];

export default function Carousel() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
            style={{
                background: "#0a183d",
                height: "100vh",
                width: "100%",
                marginTop: "-50px"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
    );
}
