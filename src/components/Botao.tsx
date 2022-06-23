interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'green' 
    return(
        <button className={`bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}