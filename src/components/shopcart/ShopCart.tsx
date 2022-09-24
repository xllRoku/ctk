import Props from "@/interface/props";
import { useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowsDimension";

const ShopCart = ({ children }: Props) => {
  const { width } = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="floating-cart">
        <button
          className="cart-floating-button"
          onClick={() => setIsShow(!isShow)}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRIie2WMUoDQRSG/6eprIQIklY8gVaeQINg7SFyhJzGM2hhAkK0SGFhZ6skFoFIihQJSuSzcBaH6G5MZme3iF/3Zh58879lh5HWEuCOb56B8zLEADNgvxC5d4gLJ28WLT5z4m7R4i1gAnwAu7E8G/MLZjaR1HF7x7HEvwI0iMNt4viR2HEVKdNeptjMniQ9RhC3M8WOGKlLESPpJikstQsqkoaStnMSP5jZQVKkJjazmaTrnKSS1PKLrFFL+Y677Repo5YkYEfSQNJmoHQqqWpm02QhM7GZvUq6D5RKUseXLhQ7LnMQtxa3zAHUgHHANTkCqisdFzgCusD7EsI3vh4YhytJ1xfgFHgB+kA9tG8Zcd/7fr3Qvr/8TuUC1F2aHnAS2vdPYXwCfvKh5P72KzUAAAAASUVORK5CYII=" />
        </button>
      </div>
      <div className={`${isShow ? "show" : ""} cart`}>
        <motion.div
          animate={{
            width: isShow
              ? `${width === 375 ? "100" : width === 768 ? "50" : "30"}%`
              : "0",
          }}
          className="cart-container"
        >
          <div className="card-top">
            <h2>Mi carro</h2>
            <div onClick={() => setIsShow(!isShow)} className="close">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="25px"
                height="25px"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
              </svg>
            </div>
          </div>
          <div className="products">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="shipping">
            <div className="shipping-total">
              <p>Total</p>
              <span>$0</span>
            </div>
            <button type="button" className="btn-checkout">
              <p>Verifica ahora</p>
            </button>
          </div>
        </motion.div>
      </div>
      {children}
    </>
  );
};

export default ShopCart;
