import React from "react";

function Group() {
    const elements = [];
    const num = 16;
    for (let i = 0; i < num; i++) {
        elements.push(<div className = "leftside-groups-group">
            <svg className = "leftside-groups-group-image" viewBox = "0 0 29 30" fill = "none" xmlns = "http://www.w3.org/2000/svg">
                <path d = "M28.591 25.6212C28.591 23.0879 26.1625 20.9328 22.7728 20.1341M19.8637 25.6213C19.8637 22.408 15.9564 19.8031 11.1365 19.8031C6.31651 19.8031 2.40918 22.408 2.40918 25.6213M19.8637 15.4395C23.077 15.4395 25.6819 12.8346 25.6819 9.62128C25.6819 6.40799 23.077 3.8031 19.8637 3.8031M11.1365 15.4395C7.92316 15.4395 5.31827 12.8346 5.31827 9.62128C5.31827 6.40799 7.92316 3.8031 11.1365 3.8031C14.3497 3.8031 16.9546 6.40799 16.9546 9.62128C16.9546 12.8346 14.3497 15.4395 11.1365 15.4395Z" stroke = "#B295FB" strokeWidth = "2.90909" strokeLinecap = "round" strokeLinejoin = "round"/>
            </svg>

            Группа {i + 1}
        </div>)
    };
    return (
        elements
    )
}

export default Group