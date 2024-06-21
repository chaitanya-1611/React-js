function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.children
   /*
    domElement.setAttribute("href",reactElement.props)
    domElement.setAttribute("target",reactElement.props.target)
    */
   for (const prop in reactElement.props) {
    if(prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
    container.appendChild(domElement)
}

const reactElement = {
    type : "a",
    props:{
        href:"http://google.com",
        target : "_blank"

    },
    children: "click me to  visit google.com"
}
const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)