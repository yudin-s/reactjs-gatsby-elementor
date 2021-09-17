import * as React from "react"
import ucwordfirst from "../../utils/ucwordfirst"
import * as components from "./index"

const elementorComponents = {
    Section: components.Section,
    Column: components.Column,
}
const ChildRenderer = ({ elements, id }) => {
    return (
        <div key={id} >
            {
                elements.map(item => {
                    console.log(item)
                    return React.createElement(
                        elementorComponents[ucwordfirst(item.elType)],
                        {
                            ...item
                        }
                    )
                }
                )
            }
        </div>
    )
}

export default ChildRenderer