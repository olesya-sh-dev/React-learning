import { useEffect, useState } from "react"

type PropsType = {
    //date: Date
}
const to2digits = (num: number) => num < 10 ? '0' + num : num

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
      const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
   
    }, [])

    // const secondsString = date.getSeconds().toString().padStart(2, '0')

    
    const secondsString = to2digits(date.getSeconds())
    const minutesString = to2digits(date.getMinutes())
    const hoursString = to2digits(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}