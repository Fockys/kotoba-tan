import "./NavigationSide.css"
import AppTitle from "./AppTitle.tsx"
import ModulesSide from "./ModulesSide.tsx"
import NavigationSideFooter from "./NavigationSideFooter.tsx"


function NavigationSide(){

    return(
        <div className="navigationSide">
            <AppTitle/>
            <ModulesSide title="module 1" link="#" />
            <ModulesSide title="module 2" link="#" />
            <NavigationSideFooter/>
        </div>
    )
}

export default NavigationSide