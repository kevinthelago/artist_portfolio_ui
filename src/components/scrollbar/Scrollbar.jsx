import { useEffect, useState } from "react";
import './scrollbar.css';

const Scrollbar = (props) => {
    let [height, setHeight] = useState(0);
    let [opacity, setOpacity] = useState(0.0);
    let [position, setPosition] = useState(0);
    let page;
    let ratio;

    setTimeout(() => {
        const root = document.getElementById('root');
        page = document.getElementById('page');
        ratio = (root.clientHeight / page.offsetHeight);

        let height = Math.round((root.clientHeight / page.offsetHeight) * root.clientHeight);
        setHeight(height)
        console.log(height)
    }, 10, { setHeight })

    // root.addEventListener("scroll", (event) => {console.log("add event listener")});

    useEffect(() => {
        onscroll = () => { 
            const y = Math.abs(page.getBoundingClientRect().y);
            const position = Math.round(y + (ratio * y));
            setPosition(position + 'px');
            setOpacity(.4);
            setTimeout(() => {
                setOpacity(0)
            }, 3000)
            console.log(position);
        };
    }, [ setPosition, page, ratio ])

    return (
        <div
            id="scrollbar"
            style={{
                top: position,
                width: '8px',
                height: height,
                borderRadius: '4px',
                backgroundColor: 'black',
                opacity: opacity
            }}
        />
    )
}

export default Scrollbar;