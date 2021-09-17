import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ChildRenderer from "../components/Elementor/ChildRenderer"

const BlogPostTemplate = data => {
    console.log('there')
    console.log({ data })
    const elementorData = JSON.parse(data.pageContext.elementorData)
    console.log(elementorData);
    return (
        <Layout>
            <h1>Hi people</h1>
            <ChildRenderer elements={elementorData} />
        </Layout>
    )
}

export default BlogPostTemplate
