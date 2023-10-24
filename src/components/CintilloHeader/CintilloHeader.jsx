import Cintillo from "/assets/cintillo.svg";
import Cintillo2 from "/assets/cintillo2.svg";

export default function CintilloHeader() {
  return (
    <div className=" h-16 w-full bg-[#F64613] pt-[4px]">
      <div className="h-14 w-full flex justify-center bg-[#2E219E]">
        <div className="w-2/3 flex justify-evenly">
          <img
            className="object-fill"
            src={Cintillo}
            alt="Cintillo de gobierno"
          />
          <img
            className="object-fill "
            src={Cintillo2}
            alt="Cintillo de gobierno"
          />
        </div>
      </div>
    </div>
  );
}
