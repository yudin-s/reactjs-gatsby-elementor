import * as React from "react"
import ucwordfirst from "../../utils/ucwordfirst"

import Image from "./Widgets/Image"
import Heading from "./Widgets/Heading"

const elementorWidgets = {
    Image,
    Heading
}

const Widget = ({ id, elements, settings, widgetType }) => {

    if (elementorWidgets[ucwordfirst(widgetType)]) {
        return React.createElement(
            elementorWidgets[ucwordfirst(widgetType)],
            {
                settings, elements, widgetType, id
            }
        )
    }
    else {
        return (<h5>Not implemented yet {widgetType}</h5>)
    }

}

export default Widget;
