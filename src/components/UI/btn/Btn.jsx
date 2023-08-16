import css from './style.module.css'
export default function Btn(props) {
    console.log('css ===', css);
    const getClasses = props.secondary ? `${css.btn} ${css.gray}` : css.btn
    return <button className={getClasses}> {props.children}</button >

}
