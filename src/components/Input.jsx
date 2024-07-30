const Input = ({fieldName, userHeight}) => {
    return(<div className="my-6 relative w-[30rem] flex justify-center">
        <label className="absolute -top-3 left-12 bg-Dom">{fieldName}</label>
        <input className="border-solid border-2 border-Comp rounded min-w-[26rem] bg-Dom" style={{height : userHeight}}></input>
    </div>)
}

export default Input;