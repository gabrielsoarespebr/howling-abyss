export const Region = () => {
    const urlCurrent = document.URL
    const questionMarkIndex = urlCurrent.indexOf("?")
    const regionChosen: string = urlCurrent.slice(questionMarkIndex + 1)

    const champByRegion = {
        "bandle_city": ["Corki", "Lulu", "Rumble", "Teemo", "Tristana", "Veigar", "Yuumi"],
        "bilgewater": ["Fizz", "Gangplank", "Graves", "Illaoi", "Miss Fortune", "Nautilus", "Pyke", "Tahm Kench", "Twisted Fate"],
        "demacia": ["Fiora", "Galio", "Garen", "Jarvan IV", "Kayle", "Lucian", "Lux", "Morgana", "Poppy", "Quinn", "Shyvana", "Sona", "Sylas", "Vayne", "Xin Zhao"],
        "iona": ["Ahri", "Akali", "Irelia", "Ivern", "Jhin", "Karma", "Kayn", "Kennen", "Lee Sin", "Lillia", "Master Yi", "Wukong", "Rakan", "Sett", "Shen", "Syndra", "Varus", "Xayah", "Yasuo", "Yone", "Zed"],
        "ixtal": ["Malphite", "Milio", "Neeko", "Nidalee", "Qiyana", "Rengar", "Zyra"],
        "noxus": ["Cassiopeia", "Darius", "Draven", "Katarina", "Kled", "LeBlanc", "Mordekaiser", "Riven", "Samira", "Sion", "Swain", "Talon", "Vladimir"],
        "piltover": ["Caitlyn", "Camille", "Ezreal", "Heimerdinger", "Jayce", "Orianna", "Seraphine", "Vi"],
        "shadow_isles": ["Elise", "Gwen", "Hecarim", "Kalista", "Karthus", "Maokai", "Thresh", "Vex", "Viego", "Yorick"],
        "shurima": ["Akshan", "Amumu", "Azir", "K'Sante", "Naafiri", "Nasus", "Rammus", "Renekton", "Rengar", "Sivir", "Skarner", "Taliyah", "Xerath"],
        "mt_targon": ["Aphelios", "Aurelion Sol", "Diana", "Leona", "Pantheon", "Soraka", "Taric", "Zoe"],
        "freljord": ["Anivia", "Ashe", "Braum", "Gnar", "Gragas", "Lissandra", "Nunu & Willump", "Olaf", "Ornn", "Sejuani", "Trundle", "Tryndamere", "Udyr", "Volibear"],
        "void": ["Bel'Veth", "Cho'Gath", "Kai'Sa", "Kassadin", "Kha'Zix", "Kog'Maw", "Malzahar", "Rek'Sai"],
        "zaun": ["Blitzcrank", "Dr. Mundo", "Ekko", "Janna", "Jinx", "Renata Glasc", "Singed", "Twitch", "Urgot", "Viktor", "Warwick", "Zac", "Ziggs", "Zeri"]
    }

    const champList = champByRegion[`${regionChosen}`]

    return (
        <div className='flex justify-around mt-10 mb-20 ms-10'>
            {regionChosen}
            <ul>
                {champList.map(champ => <li>{champ}</li>)}
            </ul>
        </div>
    )
}