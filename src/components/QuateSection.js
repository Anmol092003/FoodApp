import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function QuateSection(){
    return(
        <div className="section quote">
            <p className="quate-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is every thing we are. It's an extension of nationalist feeling, ethic feeling, your personal history, you province, your region, your trube, your grandma. It's inseparable from those from the get-go.</p>
            <p className="quote-auther">-Anthony Bourdain</p>
        </div>
    )
} 
