import Styles from './styles/linha.module.css'
import Celula from '../components/celula'
export default function Linha (props){
    return (
        <div className={Styles.linha}>
            <Celula preta = {props.preta}/>
            <Celula preta = {!props.preta}/>
            <Celula preta = {props.preta}/>
            <Celula preta = {!props.preta} />
            <Celula preta = {props.preta}/>
            <Celula preta = {!props.preta}/>
            <Celula preta = {props.preta}/>
            <Celula preta = {!props.preta}/>
        </div>
    )
}