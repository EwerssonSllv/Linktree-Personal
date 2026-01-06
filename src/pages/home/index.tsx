import { Social } from "../../components/social"
import { FaGithub, FaLinkedin} from "react-icons/fa"
import { BsFileEarmarkText } from "react-icons/bs";

export function Home() {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20 ">Ewersson Silva </h1>
            <span className="text-gray-50 mb-5 mt-3">See my links</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center cursor-pointer">
                <section className="
                bg-white
                mb-4 w-full
                py-2
                rounded-lg
                select-none
                transition-transform hover:scale-105">
                    <a>
                        <p className="md:text-lg text-base ">
                            GitHub
                        </p>
                    </a>
                </section>
                <footer className="flex justify-center gap-3 my-4 ">
                    <Social url="https://ewerssonsllv.netlify.app/">
                        <BsFileEarmarkText size={30} color="white" />
                    </Social>
                      <Social url="https://github.com/EwerssonSllv">
                        <FaGithub size={30} color="white"/>
                    </Social>
                    <Social url="https://www.linkedin.com/in/ewerssonsllv/">
                        <FaLinkedin size={30} color="white"/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}