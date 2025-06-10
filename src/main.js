import './style.css'
import 'preline/preline.js'
import { textFlip } from './js/text-flip.js'

textFlip({
    selector: '#textSlider',
    height: 30,      // Height of each text block
    duration: 0.6,   // Animation duration
    interval: 3000   // Time between slides (ms)
});


