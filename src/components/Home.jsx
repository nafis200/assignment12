import Banner from "./homesection/Banner";
import Mostvote from "./homesection/Mostvote";


const Home = () => {
//   const now = new Date();
// const customTimestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
// console.log(customTimestamp);

// const cursor = collection.find().sort({ date: 1 });

  return (
     <div>
     <Banner></Banner>
     <div className="mt-20 bg-[url('https://i.postimg.cc/j5VDrL6M/1000-F-274471125-m-RSXEz1-Xhtm-Ztmj-S8-H3g-TNFH2a-Yt-LWcy.jpg')] min-h-full ">
      <h2 className="text-2xl text-center font-bold">Featured Surveys Section</h2>
      <p className="font-extralight text-center">The "Featured Surveys" section is designed to highlight and showcase selected surveys prominently on a webpage. This section serves as an engaging and informative area where users can quickly access important or popular surveys. Here’s a breakdown of the key components and design considerations for this section</p>
      <Mostvote></Mostvote>
     </div>

     </div>
  )
};

export default Home;
