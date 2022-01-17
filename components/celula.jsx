import styled from "./styles/celula.module.css"
export default function Celula(props    ){
    return (
        <div style={{
            backgroundColor: props.preta ? "#000":"#fff"
        }} className={styled.celula}>

        </div>
    )
}