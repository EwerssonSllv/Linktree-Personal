import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { db } from "../../services/firebaseConnection";
import { setDoc, getDoc, doc } from "firebase/firestore";

import { useEffect, useState, type FormEvent } from "react";

export function Networks() {
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [portfolio, setPortfolio] = useState("")

    function handleRegister(e: FormEvent) {
        e.preventDefault()

        setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            github: github,
            portfolio: portfolio
        }).then(() => {
            alert("Sucess")
        }).catch((e) => {
            alert("Error" + e)
        })
    }

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() != undefined) {
                        setPortfolio(snapshot.data()?.portfolio)
                        setGithub(snapshot.data()?.github)
                        setLinkedin(snapshot.data()?.linkedin)
                    }
                })
        }
        loadLinks()
    }, [])

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
                <label className="text-white font-medium mb-2 mt-2 ">LinkedIn</label>
                <Input
                    placeholder="Linkedin URL"
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
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