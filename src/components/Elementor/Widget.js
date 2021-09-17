import * as React from "react"
import ucwordfirst from "../../utils/ucwordfirst"

import * as elementorWidgets from "./Widgets"

const Widget = ({ id, elements, settings }) => {
    return (
        <div key={id} >
            {
                elements.map(item => {
                    console.log(item)
                    if (elementorWidgets[ucwordfirst(item.widgetType)])
                        return React.createElement(
                            elementorWidgets[ucwordfirst(item.widgetType)],

                            {
                                id: item.id,
                                ...item
                            }
                        )
                    else {
                        return (<h5>Not implemented yet {item.widgetType}</h5>)
                    }
                }
                )
            }
        </div>
    )
}

export default Widget;
