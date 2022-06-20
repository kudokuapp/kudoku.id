import Image from "next/image";
import tools from "../../core/mock/tools";


const CardTools = () => {
    return (
        <>
        {tools.map((item,index)=>{
        return <div className="card-finansial-check flex flex-col justify-between" key={index}>
                <Image className='h-auto' src={item.imgSrc} width={100} height={100} alt="" />
                <h4 className="text-lg text-left font-bold text-black mt-4">{item.title}</h4>
                <h4 className="text-md text-left font-light text-black mt-4">{item.description}</h4>
                <button className="text-white w-full bg-outline rounded-md p-2 mt-2" disabled>Cooming soon</button>
            </div>
        })}                  
        </>
    )
}

export default CardTools;