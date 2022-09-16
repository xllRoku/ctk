import { Link } from "react-router-dom";
import { LocationLoginProps } from "../Form/interface/LocationLoginProps";

const OthersSingIn = ({ location }: LocationLoginProps) => {
  return (
    <div className="sign-top">
      {location === "sign-in" ? (
        <h2>Inicia Sesion en Control Taken</h2>
      ) : (
        <h2>Resgistrate en Control taken</h2>
      )}
      <div className="social-media">
        <div className="facebook">
          <Link to="/">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
            </svg>
          </Link>
        </div>
        <div className="gmail">
          <Link to="/">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OthersSingIn;
