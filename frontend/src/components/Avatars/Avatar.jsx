import PropTypes from 'prop-types'

export default function Avatars(props){
    //Added default state for the Avatar
    const defaultState = 'inline-flex w-full justify-center rounded-full px-1 py-1 text-sm font-medium hover:bg-gray-200';

    const defaultDesign = 'h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center';
    
    return(
        <>
        <button className={defaultState}>
            <div className={defaultDesign} style={{backgroundImage: 'url(${imageURL})'}}>
            <span className='sr-only'> {props.imageName} </span>
            </div>
        </button>
    </>
    ) 
}

Avatars.propTypes = {
imageName: PropTypes.string.isrequired,
imageURL: PropTypes.string.isrequired
}
