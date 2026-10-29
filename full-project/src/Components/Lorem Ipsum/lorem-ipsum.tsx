import './lorem-ipsum-styles.css'
import {useState} from 'react'

export default function LoremIpsum () {

    const [isTextHidden, setIsTextHidden] = useState(false);
    function handleTextCollapse () {
        setIsTextHidden(!isTextHidden);
    }

    return (
        <div id='lorem-zone'>
            <h2>Lorem Ipsum Zone</h2>
            <button id='collapse-lorem' onClick={handleTextCollapse}>{isTextHidden ? 'Reveal Text' : 'Collapse Text'}</button>
            {!isTextHidden &&
               <> 
                <p className='lorem-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie quam elit. Cras augue eros, rhoncus nec fermentum et, scelerisque non mauris. Donec at urna sagittis, pellentesque neque at, eleifend ex. Phasellus finibus interdum hendrerit. Donec vitae nibh quis risus rhoncus aliquam. Pellentesque non ipsum orci. Vivamus bibendum felis tellus, eget suscipit lacus cursus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vulputate lorem nec laoreet maximus. Proin elit odio, lobortis non erat finibus, lobortis ullamcorper justo. Mauris et varius mauris. Aenean consequat, augue at molestie feugiat, velit justo convallis mi, sed consectetur magna orci in libero. Ut faucibus risus metus, nec pharetra justo tincidunt vitae. Cras ut purus blandit, varius augue sit amet, condimentum diam. Integer euismod iaculis pretium. In id rutrum diam, in malesuada est.</p>
                <p className='lorem-paragraph'>Duis viverra eleifend urna ac placerat. Praesent pellentesque nisi libero, ut fermentum ante imperdiet et. Vestibulum nec sodales augue. Sed enim nibh, congue sed ultricies sed, faucibus eget dolor. Curabitur eget tempor nibh. Suspendisse dapibus eros mauris, vel molestie elit blandit vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id bibendum lorem, a dictum elit. Mauris in arcu at mi aliquet luctus vitae vel lorem. Nam placerat sagittis turpis, dapibus commodo ante.</p>
                <p className='lorem-paragraph'>Aenean aliquam nibh vitae nulla aliquam, id consectetur diam egestas. Etiam turpis magna, dapibus ut malesuada eu, sagittis sed eros. Mauris at arcu non justo semper cursus a in dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sit amet tincidunt nibh. Nullam fermentum et leo vitae porta. Integer non ex fermentum, elementum libero sit amet, finibus ligula. Ut eget enim egestas diam tempor tincidunt non nec lacus.</p>
               </>
            }
        </div>
    )
}