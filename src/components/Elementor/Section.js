import * as React from "react";
import ChildRenderer from "./ChildRenderer";

const Section = data => {
    return (
        <div class="row">
            <ChildRenderer {...data} />
        </div>
    )
}


export default Section