import audioIcon from './assets/Group4.png'
import './App.css'

// eslint-disable-next-line react/prop-types
export default function ResultHeader ({isLightMode, fontSpecified, word, phonetic}){
    return(
      <div className='resultHeader'>
        <div className='wp'>
          <h1 style={isLightMode ? null : {color:'white'}}>{word}</h1>
          <span>{phonetic}</span>
        </div>
        <img src={audioIcon} />
      </div>
    )
  }