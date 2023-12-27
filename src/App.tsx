import { useEffect, useRef, useState } from "react"
import { formatTimeData } from "./utils"
import Layout from "./components/layout/Layout"

export default function App() {
    const [time, setTime] = useState(new Date())
    const intervalRef: any = useRef()

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
        <Layout>
            <div className="timer">
                <span className="timer__time">{formatTimeData(time.getHours())}</span>:
                <span className="timer__time">{formatTimeData(time.getMinutes())}</span>:
                <span className="timer__time">{formatTimeData(time.getSeconds())}</span>
            </div>
        </Layout>
    )
}