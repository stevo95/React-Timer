import './SliderScale.Component.css';

const SliderScale = () => {

    const renderLines = () => {
        const array = new Array(101).fill(0);
        return array.map((el, idx) => {
            if (idx === 0 || idx % 5 === 0) {
                return <div className="line_large" key={idx}></div>
            } else {
                return <div className="line_small" key={idx}></div>
            }
        })
    }

    return (
        <div className='scale_container'>
            {renderLines()}
        </div>
    )
}

export default SliderScale;
