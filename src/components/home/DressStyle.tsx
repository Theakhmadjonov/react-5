import "../../assets/styles/casual.css";

const DressStyle = () => {
  return (
    <section className="mt-[80px]">
      <div className="my-container bg-[rgba(240,_240,_240,_1)] rounded-[40px] !px-[64px] pb-[76px]">
        <h1 className="pt-[70px] mb-[64px] title ml-[298px]">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-3 w-[100%] gap-x-5 gap-y-5">
          <div className="h-[289px] rounded-[20px] casual">
            <h1 className="text-[30px] font-bold mt-[25px] ml-[36px]">
              Casual
            </h1>
          </div>
          <div className="h-[289px] col-span-2 rounded-[20px] formal">
            <h1 className="text-[30px] font-bold mt-[25px] ml-[36px]">
              Formal
            </h1>
          </div>
          <div className="h-[289px] col-span-2 rounded-[20px] party">
            <h1 className="text-[30px] font-bold mt-[25px] ml-[36px]">Party</h1>
          </div>
          <div className="h-[289px] rounded-[20px] gym">
            <h1 className="text-[30px] font-bold mt-[25px] ml-[36px]">
              gym
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
