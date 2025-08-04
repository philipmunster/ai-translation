import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header>
            <span className='title'>
                <FontAwesomeIcon icon={faGlobe} className='globe-icon'/>
                AI Translator
            </span>
            <p className='subtitle'>Translate everything using AI</p>
        </header>
    )
}