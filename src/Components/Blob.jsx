import { useEffect } from "react"

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
                },
            )
        }

        return () => (document.body.onmousemove = null)
    }, [])

    return (
        <>
            <div id='backgroundBlob'></div>
            <div className='pointer-events-none absolute inset-0 z-[-1] touch-none select-none bg-transparent backdrop-blur-[100px] sm:hidden'></div>
        </>
    )
}
export default Blob
