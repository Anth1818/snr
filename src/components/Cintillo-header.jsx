import Cintillo from "../assets/cintillo.svg"
import Cintillo2 from "../assets/cintillo2.svg"


export default function CintilloHeader(){
    return (
        <div className="h-32 w-full bg-[#F64613] absolute">
            <div className="h-24 flex justify-evenly p-1 relative mt-3 bg-[#2E219E]">
                <img className=" w-2/3 object-fill"  src={Cintillo} alt="Cintillo de gobierno" />
                <img className=" w-52 object-fill"  src={Cintillo2} alt="Cintillo de gobierno" />
            </div>
        </div>
    )
}