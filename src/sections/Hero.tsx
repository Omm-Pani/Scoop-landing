import Button from "@/components/Button";
import Starsbg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${Starsbg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* start planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_84.2%_13.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* end planet */}

      {/* start ring 1 */}
      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="absolute h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* end ring 1 */}

      {/* start ring 2 */}
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 border-dashed rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      {/* end ring 2 */}

      {/* start ring 3 */}
      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute h-2 w-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* end ring 3 */}

      <div className="relative container">
        <h1 className="text-8xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_right,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          SCOOP
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Save time by changing manual doc search to ai powered internal search
          engine of your company. Where tech meets efficiency
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Scoop</Button>
        </div>
      </div>
    </section>
  );
};
