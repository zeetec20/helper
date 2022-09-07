const { useState, useEffect } = require("react")

/**
 * @returns {[number, number]}
 */
const useScroll = () => {
    const [scroll, setScroll] = useState([])
    const wScrollY = window.scrollY ?? 0
    const handle = () => setScroll([scroll ? wScrollY : scroll[1], wScrollY])

    useEffect(() => {
        window.addEventListener('scroll', handle, {passive: false})
        return () => window.removeEventListener('scroll', handle, {passive: false})
    }, [])

    return [scroll[0], scroll[1]]
}

export default useScroll