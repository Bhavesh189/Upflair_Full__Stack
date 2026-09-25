import { useEffect, useState } from "react";

function useType(word) {

    const [now, setNow] = useState("")

    useEffect(() => {
        let i = 0

        const x = setInterval(() => {
            setNow(word.slice(0, ++i))

            if (i == word.length) clearInterval(x)
        }, 500)


        return () => {
            clearInterval(x)
        }
    }, [])

    return now
}


export { useType }