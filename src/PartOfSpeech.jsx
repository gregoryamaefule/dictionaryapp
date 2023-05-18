
import './App.css'

export default function PartOfSpeech({isLightMode, fontSpecified, meaning}) {
    if (meaning == undefined) {
        return null
    }
    const listitems = meaning.definitions.map((item, index) => {
            return (
                <>
                    <li key={`li-${index}`} className='li' style={isLightMode ? null : {color: 'white'}}>{item.definition}</li>
                    <span key={`span-${index}`} className='ex'>{item.example}</span>
                </>
            )
        }
    )
    const synonyms = meaning.synonyms.length > 0 ?
        <p className='syn'>
            <span>Synonyms</span>
            <span className='sy'>{meaning.synonyms.map((item, index) => <span key={index}
                                                                              style={{paddingRight: '8px'}}>{`${item} `}</span>)}</span>
        </p> : null


    return (
        <div className='POS'>
            <div className='hd'>
                <span className='ps' style={isLightMode ? null : {color: 'white'}}>{meaning.partOfSpeech}</span>
                <hr></hr>
            </div>
            <span className='MNG'>Meaning</span>
            <ul>
                {listitems}
            </ul>
            {synonyms}
        </div>
    )
}