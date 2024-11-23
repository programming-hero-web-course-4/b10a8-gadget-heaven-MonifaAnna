import bannerImg from '../BannerImg/banner.jpg'

const Banner = () => {
    return (
        <div className='relative h-[694px]'>
        <div className="text-center text-white pb-32">
            <h1 className=" text-[56px] font-bold">Upgrade Your Tech Accessorize with<br /> Gadget Heaven Accessories</h1>
            <p className=" py-7 font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br /> the coolest accessories, we have it all!</p>
            <button className="bg-white text-[#9538E2] py-3 px-10 rounded-full font-semibold ">Shop Now</button>
        </div>
        <div className=" top-[360px] z-10 left-96 absolute w-[1110px]  mx-auto border-2 rounded-[24px] bg-[#FFFFFF4D] p-8 ">
            <img src={bannerImg} className='rounded-[24px] w-[1062px] h-[563px]' alt="" />
        </div>
        </div>
    );
};

export default Banner;