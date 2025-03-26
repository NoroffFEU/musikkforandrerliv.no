import {useState} from 'react';
import styles from "./readMore.module.css";

export default function readMore ({ summary, content }){
    const [expanded, setExpanded] = useState(false);

    return (
       <div className={styles.readMore}>
        <p>{expanded ? content : summary}</p>
        <button onClick={() => setExpanded(!expanded)} className={styles.button}>
            {expanded ? "Read less" : "Read more"} 
        </button>
      </div>
    )
}