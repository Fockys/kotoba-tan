
import "./NavigationSide.css"

interface ModulesSideProps {
    title: string;
    link: string;
}

function ModulesSide({ title, link }: ModulesSideProps){

    return(
        <div className="modulesSide">
            <h3>{title}</h3>
        </div>
    )
}


export default ModulesSide