import "../../assets/styles/arrival.css";
import Card from "./Card";
import tShirt from "../../assets/icons/Frame 32.svg";

const Arrivals = () => {
  return (
    <section className="mt-[72px]">
      <div className="my-container text-center">
        <h1 className="title">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[55px] gap-y-5 justify-between">
          <Card imageUrl={tShirt} price={20} rating={1.5} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={4} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={3} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={5} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={3.5} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={2.5} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={2} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={1} title="T-Shirt" />
          <Card imageUrl={tShirt} price={20} rating={1.5} title="T-Shirt" />
        </div>
        <button className="text-[16px] font-medium py-[15px] px-[80px] border-[1px] border-[rgba(0,_0,_0,_0.1)] rounded-[62px] mt-[36px]">View All</button>
        <div className="bg-[rgba(0,_0,_0,_0.1)] h-[1px] mt-[64px]"></div>
      </div>
    </section>
  );
};

export default Arrivals;
