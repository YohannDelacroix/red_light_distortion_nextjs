/**
 * TitleComponent - A reusable component for rendering headings (h1 to h6)
 * with dynamic IDs and custom titles.
 *
 * This component dynamically renders a heading (h1 to h6) based on the 'level'
 * prop, which specifies the heading level. It generates a dynamic ID for the
 * heading if not provided, ensuring unique identification for accessibility.
 * The component also supports a default heading level of 1 (h1) and can handle 
 * invalid 'level' values, defaulting to level 1.
 *
 * Props:
 *  - titleContent (string): The text content to be displayed as the title. This is required.
 *  - level (number): The level of the heading (1 to 6). Defaults to 1 (h1).
 *  - titleId (string): Optional. Custom ID for the heading. If not provided, a dynamic ID is generated.
 *
 * Example usage:
 * <TitleComponent titleContent="Welcome to the Site" level={2} />
 * <TitleComponent titleContent="Section 1" />
 */

import "@/styles/titleComponent.css"

function TitleComponent({ titleContent, level = 1, titleId = ""}) {
    //Generate a dynamic ID if aria labelled by is not provided
    if(titleId === "") titleId = `title-${Math.random().toString(36).slice(2, 11)}`;

    //Ensure the level is valid and reinitialize to default value
    if(level < 1 || level > 6) level = 1;
    const Tag = `h${level}`;  //Create a h1 to h6 tag

    return (<div className="title"><div className="title-container">
        <Tag 
            className="title-text"
            data-testid="heading-tag"
            id={titleId}>
            {titleContent}
        </Tag>
    </div></div>)
}

export default TitleComponent;