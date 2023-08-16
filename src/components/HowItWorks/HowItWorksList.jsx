import { useEffect, useState } from "react"
import css from './HowItWorksList.module.css'

export default function HowItWorksList() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("/data/howItWorks.json")
            .then(resp => resp.json())
            .then(data => setItems(data))
            .catch(console.warn)
    }, [])

    return (
        <div className={css.cardsBlock}>
            {items.map(obj => (
                <div className={css.oneCard} key={obj.id}>
                    <h2>{obj.id}</h2>
                    <h3>{obj.title}</h3>
                    <p>{obj.descr}</p>
                </div>
            ))}
        </div>
    )
}
