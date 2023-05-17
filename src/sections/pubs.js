import React, {useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom/client";

function updateBG() {
    const header = ReactDOM.createRoot(document.getElementById("header"));
    header.render(
        <div style={{
            backgroundImage: `url("https://via.placeholder.com/500")`
        }}>
            <h1 class="project_title"> Siddharth Mohanty: Student & Researcher </h1>
            <h2 class="project_title"> Resume </h2>
            <br/>
            <a href="https://github.com/S-Spektrum-M" class="btn">View on GitHub</a>
        </div>
    )
}

function resetBG() {
    const header = ReactDOM.createRoot(document.getElementById("header"));
    header.render(
        <>
            <h1 class="project_title"> Siddharth Mohanty: Student & Researcher </h1>
            <h2 class="project_title"> Resume </h2>
            <br/>
            <a href="https://github.com/S-Spektrum-M" class="btn">View on GitHub</a>
        </>

    );
}

function trucnate(str, n) {
    return str.slice(0, n) + '...'
}

// Hook
function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    return [ref, value];
}

export function Publication(props) {
    const [hoverRef, isHovered] = useHover();
    return (
        <div className="card" ref={hoverRef}>
            <h3> {props.text} </h3>
            <hr />
            <p className="description">
                {isHovered ? updateBG() : resetBG()}
                {trucnate(props.abstract, 100)}
            </p>
            <a href={props.link}>Read More</a>
        </div>
    );
}
