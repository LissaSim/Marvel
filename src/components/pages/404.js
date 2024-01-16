import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

const Page404 = () => {
    return(
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeigth': 'bold', 'font-size': '24px', 'color': '#9f0013'}}>Page doesn`t exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeigth': 'bold', 'font-size': '24px'}} to="/">Back to main Page</Link>
        </div>
    )
}

export default Page404