import Image from "next/image";
import teams from "../../core/mock/teams";


const CardTeam = () => {
    return (
        <>
        {teams.map((item,index)=>{
        return <div className="card-finansial-check bg-white w-full flex flex-col md:my-0 my-2 justify-between" key={index}>
                    <div className="bg-primary py-6 px-11 rounded-full">
                        <Image className="rounded-full" src={item.imgSrc} alt="CEO" />
                    </div>
                    <h4 className="text-md text-center font-light text-black mt-4">{item.title}</h4>
                    <h4 className="text-md text-center text-black mt-4 font-bold">{item.description}</h4>
                </div>
        })}                  
        </>
    )
}

export default CardTeam;