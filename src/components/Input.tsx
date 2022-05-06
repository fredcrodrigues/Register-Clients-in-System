
interface InputProps{
    text: string
    type?: 'text' | 'number'
    val: any
    writing?: boolean
    className?: string
    valUpdate?: (valor: any) => void 
}

export default function Form( props: InputProps){

    return(
        <div className={`flex flex-col ${props.className}`} >
            <label className="mb-4">
                {props.text}
            </label>

            <input 
                value={props.val}
                type={props.type ?? 'text'} 
                readOnly={props.writing}
                onChange={e => props.valUpdate?.(e.target.value)}
                className={` border border-puple-500 roudend-lg
                            focus:outline-none bg-gray-100 px-4 py-2
                            ${props.writing ? '' : 'focus: bg-white'}
                
                `}
            />
        </div>
    )
}