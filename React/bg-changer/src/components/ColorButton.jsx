// import setColor from './App'

function ColorChanger(props) {
    return (
        <button className="rounded-lg pt-1 pb-1 pl-4 pr-4 text-black font-semibold text-[16px] flex items-center"
        style={{backgroundColor: props.color}}
        onClick={() => {
            props.method(props.color);
        }}>
            {props.color}
        </button>
    )
}

export default ColorChanger