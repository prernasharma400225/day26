import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({
            "_id": {
                "$oid": "69ad0c202375fac9ac3c1da7"
            },
            "url": "https://ik.imagekit.io/af6qb9ebno/cohort-2/moodify/songs/Jatt_Mehkma__RiskyjaTT.CoM__yE65OcsZ7.mp3",
            "posterUrl": "https://ik.imagekit.io/af6qb9ebno/cohort-2/moodify/posters/Jatt_Mehkma__RiskyjaTT.CoM__w9TwowLQk.jpg",
            "title": "Jatt Mehkma (RiskyjaTT.CoM)",
            "mood": "happy",
        
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )
}