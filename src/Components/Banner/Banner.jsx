

const Banner = () => {
    return (
        <div>
            {/* upper side */}
            <div className="text-center py-44 rounded-lg
              items-center bg-purple-600 ">
                <h1 className=" text-xl md:text-5xl font-semibold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-gray-100 my-10">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button  className="btn rounded-full mb-">Shop Now</button>

            </div>
            {/* lower image */}
            <div>
                <img className="w-3/5 mx-auto rounded-xl -mt-[160px] p-4 border-white border-2 " src="/banner.jpg" />
            </div>
        </div>
    );
};

export default Banner;