import * as React from "react";
import ChildRenderer from "./ChildRenderer";

const Section = data => {
    return (
        <div class="row">
            <h1>I am a section</h1>
            <ChildRenderer {...data} />
        </div>
    )
}


export default Section