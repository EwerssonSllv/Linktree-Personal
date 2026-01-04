import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { db } from "../../services/firebaseConnection";
import { setDoc, addDoc, getDoc, doc } from "firebase/firestore";

import { useState, type FormEvent } from "react";

export function Networks() {
    const [instagram, setInstagram] = useState("")
    const [github, setGithub] = useState("")
    const [portfolio, setPortfolio] = useState("")

    function handleRegister(e: FormEvent){
        e.preventDefault()

        setDoc(doc(db, "social", "link"),{
            instagram: instagram,
            github: github,
            portfolio: portfolio
        }).then(()=>{
            alert("Sucess")
        }).catch((e) => {
            alert("Error" + e)
        })

    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">My Social Medias</h1>
            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mb-2 mt-2 ">Porfolio</label>
                <Input
                    placeholder="Porfolio URL"
                    type="url"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                />
                <label className="text-white font-medium mb-2 mt-2 ">GitHub</label>
                <Input
                    placeholder="GitHub URL"
                    type="url"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />
                     <label className="text-white font-medium mb-2 mt-2 ">Instagram</label>
                <Input
                    placeholder="Instagram URL"
                    type="url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <button
                type="submit"
                className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 mt-3">
                    Save

                </button>




            </form>
        </div>
    )
}