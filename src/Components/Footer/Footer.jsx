

const Footer = () => {
    return (
        <div>
            <div className="text-center items-center py-10">
                <h1 className="text-4xl font-bold">Gadget Heaven</h1>
                <p className="text-sm text-gray-500">Leading the way in cutting edge tech and innovation </p>
            </div>
            <hr />

            <footer className="footer px-10 py-20 mx-auto">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Return</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;