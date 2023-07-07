import noPhotoChampion from '../../assets/images/noPhotoChampion.png'
import noIconSkill from '../../assets/images/noIconSkill.png'
import { Header } from '../Header'

export const Region = () => {
    const urlCurrent = document.URL
    const questionMarkIndex = urlCurrent.indexOf("?")
    const regionChosen: string = urlCurrent.slice(questionMarkIndex + 1)

    const champByRegion = {
        bandle_city: ["Corki",
            "Lulu",
            "Rumble",
            "Teemo",
            "Tristana",
            "Veigar",
            "Yuumi"],
        bilgewater: ["Fizz",
            "Gangplank",
            "Graves",
            "Illaoi",
            "Miss Fortune",
            "Nautilus", "Pyke",
            "Tahm Kench",
            "Twisted Fate"],
        demacia: ["Fiora",
            "Galio",
            "Garen",
            "Jarvan IV",
            "Kayle",
            "Lucian",
            "Lux",
            "Morgana",
            "Poppy",
            "Quinn",
            "Shyvana",
            "Sona",
            "Sylas",
            "Vayne",
            "Xin Zhao"],
        freljord: ["Anivia",
            "Ashe",
            "Braum",
            "Gnar",
            "Gragas",
            "Lissandra",
            "Nunu & Willump",
            "Olaf",
            "Ornn",
            "Sejuani",
            "Trundle",
            "Tryndamere",
            "Udyr",
            "Volibear"],
        iona: ["Ahri",
            "Akali",
            "Irelia",
            "Ivern",
            "Jhin",
            "Karma",
            "Kayn",
            "Kennen",
            "Lee Sin",
            "Lillia",
            "Master Yi",
            "Wukong",
            "Rakan",
            "Sett",
            "Shen",
            "Syndra",
            "Varus",
            "Xayah",
            "Yasuo",
            "Yone",
            "Zed"],
        ixtal: ["Malphite",
            "Milio",
            "Neeko",
            "Nidalee",
            "Qiyana",
            "Rengar",
            "Zyra"],
        noxus: ["Cassiopeia",
            "Darius",
            "Draven",
            "Katarina",
            "Kled",
            "LeBlanc",
            "Mordekaiser",
            "Rell",
            "Riven",
            "Samira",
            "Sion",
            "Swain",
            "Talon",
            "Vladimir"],
        piltover: ["Caitlyn",
            "Camille",
            "Ezreal",
            "Heimerdinger",
            "Jayce",
            "Orianna",
            "Seraphine",
            "Vi"],
        shadow_isles: ["Elise",
            "Gwen",
            "Hecarim",
            "Kalista",
            "Karthus",
            "Maokai",
            "Senna",
            "Thresh",
            "Vex",
            "Viego",
            "Yorick"],
        shurima: ["Akshan",
            "Amumu",
            "Azir",
            "K'Sante",
            "Naafiri",
            "Nasus",
            "Rammus",
            "Renekton",
            "Rengar",
            "Sivir",
            "Skarner",
            "Taliyah",
            "Xerath"],
        mt_targon: ["Aphelios",
            "Aurelion Sol",
            "Diana",
            "Leona",
            "Pantheon",
            "Soraka",
            "Taric",
            "Zoe"],
        void: ["Bel'Veth",
            "Cho'Gath",
            "Kai'Sa",
            "Kassadin",
            "Kha'Zix",
            "Kog'Maw",
            "Malzahar",
            "Rek'Sai",
            "Velkoz"],
        zaun: ["Blitzcrank",
            "Dr. Mundo",
            "Ekko",
            "Janna",
            "Jinx",
            "Renata Glasc",
            "Singed",
            "Twitch",
            "Urgot",
            "Viktor",
            "Warwick",
            "Zac",
            "Ziggs",
            "Zeri"],
        nowhere: ["Aatrox",
            "Alistar",
            "Annie",
            "Bard",
            "Brand",
            "Evelynn",
            "Fiddlesticks",
            "Jax",
            "Kindred",
            "Nami",
            "Nilah",
            "Nocturne",
            "Ryze",
            "Shaco"]
    }

    const champList: Array<string> = champByRegion[regionChosen]

    const fixNameInURL = (champName: string) => {
        let champNameUpdated: string = champName
        switch (champNameUpdated) {
            case "Wukong":
                champNameUpdated = "MonkeyKing"
                break
            case "LeBlanc":
            case "Bel'Veth":
            case "Cho'Gath":
            case "Kai'Sa":
            case "Kha'Zix":
                champNameUpdated = (champNameUpdated.charAt(0) + champNameUpdated.slice(1).toLowerCase()).replace("'", "")
                break
            case "Nunu & Willump":
            case "Renata Glasc":
                champNameUpdated = champNameUpdated.split(" ", 1)[0]
                break
            default:
                champNameUpdated = champNameUpdated.replace(" ", "").replace("'", "").replace(".", "")
                break
        }
        return champNameUpdated
    }

    const skillId = ["Q", "W", "E", "R"];

    return (
        <div className="mb-20 mx-20">
            <Header regionName={regionChosen} />

            <ul className='flex flex-wrap justify-around gap-7'>
                {champList.map((champName: string, key: number) => <li className="w-1/6" key={key}>
                    <img className="primaryImage" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${fixNameInURL(champName)}_0.jpg`} alt={champName} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping (font: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror)
                        currentTarget.src = noPhotoChampion;
                    }} />
                    <p className='text-center' style={{ marginTop: "-40px" }}>{champName}</p>
                    <ul className='championSkills flex justify-center mt-4'>
                        {skillId.map((skill, key) => <li className='w-1/4' key={key}>
                            <img className='w-full opacity-50 hover:opacity-100 duration-200' src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${champName}${skill}.png`} alt={`Champion ${skill} skill`} onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping (font: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror)
                                currentTarget.src = noIconSkill;
                            }} />
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600' style={{ marginTop: "-20px" }}>
                                {skill}
                            </p>
                        </li>)}
                    </ul>
                </li>)}
            </ul>
        </div>
    )
}