import "../../styles/titleComponent.css"

function TitleComponent({titleContent}){
  return (<div className="title"><div className="title-container">
    <h1 className="title-text">
      {titleContent}
    </h1>
  </div></div>)
}

export default TitleComponent;