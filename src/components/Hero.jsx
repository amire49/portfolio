import image from "/public/photo1.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center text-white gap-10">
        <motion.div 
          initial{{y:-50, opacity:0}}
        animate{{y: 0, opacity:1}}
        transition{{duration: 0.8, delay:0.2}}
        
        
        >
          <img
            src={image}
            alt=""
            className="w-[400px] rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500 md:w-[350px]"
          ></img>
        </motion.div >

        <motion.div 
          initial{{y:50, opacity:0}}
        animate{{y: 0, opacity:1}}
        transition{{duration: 0.8, delay:0.2}}
        
        
        className="flex flex-col max-w-[600px] justify-center items-center text-center gap-3">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-semi-bold md:text-7xl ">
            Amir Naser
          </h1>
          <h2 className="bg-gradient-to-l from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl font-semi-bold md:text-3xl ">
            Software Engineer
          </h2>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            lorem amiren sjfjewkjfjkjefjsf'wjreinnv sjdjfwejdfjf f r jj gi
            jjeweioignnvbxzm rhrh hsdhwuehjoso;o;dsh f fewhhhs
            wehhgdh;;hghgruuhhgrehhgr grsjghgghrhishhsdhhahirhhtt
            rrgrhhruripojbwbvjjskafjj
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
