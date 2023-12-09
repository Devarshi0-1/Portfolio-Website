import { useEffect } from "react"
import "./blob.css"

const Blob = () => {
    useEffect(() => {
        const backgroundBlob = document.getElementById("backgroundBlob")

        document.body.onmousemove = (e) => {
            const { clientX, clientY } = e
            const scrollY = window.scrollY

            backgroundBlob.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY + scrollY}px`,
                },
                {
                    duration: 3000,
                    fill: "forwards",
                }
            )
        }

        return () => (document.body.onmousemove = null)
    }, [])

    return (
        <>
            <div id='backgroundBlob'></div>
            <div className='overlay'></div>
        </>
    )
}
export default Blob
