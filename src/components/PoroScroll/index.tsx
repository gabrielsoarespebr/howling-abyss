import { useEffect, useState } from "react"

export const PoroScroll = () => {
    const [poroProgress, setPoroProgress] = useState(0);

    const handleScroll = () => {
        const clientWidth = document.documentElement.clientWidth;
        const multiplier = clientWidth * 0.973;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const heightDifference = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollAmount = (winScroll / heightDifference) * multiplier;
        setPoroProgress(scrollAmount);
    }

    useEffect(() => {
        addEventListener("scroll", () => handleScroll())
    })

    return <div className="flex relative">
        <span style={{ background: "linear-gradient(#76582E,#B7985A)", width: (poroProgress ? poroProgress + document.documentElement.clientWidth * 0.014 : 0), zIndex: 1 }}>&nbsp;</span>
        <img className="h-6" style={{ position: "absolute", transform: "scaleX(-1)", marginLeft: poroProgress, zIndex: 2 }} src="https://vignette.wikia.nocookie.net/leagueoflegends/images/c/ce/Poro_Render.png/revision/latest" alt="Poro" />
    </div>
}