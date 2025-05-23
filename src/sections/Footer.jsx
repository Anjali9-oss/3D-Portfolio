import { socialImgs } from "../constants";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <p>Terms & Conditions</p>
          </div>
          <div className="socials">
            {socialImgs.map((img, index) => (
                <div key={index} className="icon">
                  <img src={img.imgPath} alt="social icon" />
                </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
