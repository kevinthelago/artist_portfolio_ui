import { useEffect, useState } from "react";
import './scrollbar.css';

const Scrollbar = (props) => {
    let [height, setHeight] = useState(0);
    let [opacity, setOpacity] = useState(0.0);
    let [position, setPosition] = useState(0);
    let [visible, setVisible] = useState(true);
    let [fading, setFading] = useState(false);
    let [root, setRoot] = useState({});
    let [page, setPage] = useState({});
    let [ratio, setRatio] = useState(0.0);

    useEffect(() => {
        const targetRoot = document.getElementById('root');
        const targetPage = document.getElementById('page');
        setRoot(targetRoot);
        setPage(targetPage);

        let ratio = targetRoot.clientHeight / targetPage.offsetHeight;
        setRatio(ratio);

        let height = Math.round((targetRoot.clientHeight / targetPage.offsetHeight) * targetRoot.clientHeight);
        setHeight(height)
    }, [])

    useEffect(() => {
        onscroll = () => {
            // if (!visible) {
            //     setVisible(true)
            // }
            const y = Math.abs(page.getBoundingClientRect().y);
            // console.log(y)
            const position = Math.round(y + (ratio * y));
            // console.log(position)
            setPosition(position + 'px');
            setOpacity(.4);
            if (visible) {
                setTimeout(() => {
                    setOpacity(0);
                    // setFading(true);
                    setVisible(false);
                }, 3000)
            }
            // console.log(position);
        };
    }, [setPosition, page, ratio, visible, setVisible, fading, setFading])

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