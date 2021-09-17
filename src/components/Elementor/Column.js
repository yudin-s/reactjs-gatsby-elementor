import * as React from "react"
import ChildRenderer from "./ChildRenderer";

const Column = data => {
    return (
        <div class="col">
            <h2>I am a column</h2>
            <ChildRenderer {...data} />
        </div>
    )
}

export default Column;