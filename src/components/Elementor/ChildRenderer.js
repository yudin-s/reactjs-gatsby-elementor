import * as React from "react"
import ucwordfirst from "../../utils/ucwordfirst"
import * as components from "./index"
import Section from './Section';
import Column from "./Column";
const elementorComponents = {
    Section: Section,
    Column: Column,
}
const ChildRenderer = ({ elements, id }) => {
    console.log('there', elements);
    return (
        <div key={id} >
            {
                elements.map(item => {
                    console.log(item)
                    if (elementorComponents[ucwordfirst(item.elType)])
                        return React.createElement(
                            elementorComponents[ucwordfirst(item.elType)],

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

export default ChildRenderer