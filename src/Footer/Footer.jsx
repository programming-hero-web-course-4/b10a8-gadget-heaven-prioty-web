const Footer = () => {
    return (
        <div className="text-center my-20">
            <div className="my-10">
                <h1 className="text-4xl font-bold">Gadget Heaven</h1>
                <p className=" text-xl">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="sm:flex justify-around m-5 text-[18px]">
                <div>
                    <h3 className="font-bold">Services</h3>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
                <div>
                    <h3 className="font-bold">Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h3 className="font-bold">Legal</h3>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;