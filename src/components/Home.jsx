import axios from "axios";
import Banner from "./homesection/Banner";
import Faq from "./homesection/Faq";
import Latest from "./homesection/Latest";
import Mostvote from "./homesection/Mostvote";
import Work from "./homesection/Work";



const Home = () => {
 
  const nafis =()=>{
      axios.post('http://localhost:5000/sslComerece',{
        amount:100,
      })
      .then(res=>{
        console.log(res.data)
         if(res.data){
          window.location.replace(res.data.paymentUrl)
         }
      })
  }
  return (
     <div>
      <button onClick={nafis} className="btn btn-primary">Click</button>
     <Banner></Banner>
     <div className="mt-20 bg-[url('https://i.postimg.cc/j5VDrL6M/1000-F-274471125-m-RSXEz1-Xhtm-Ztmj-S8-H3g-TNFH2a-Yt-LWcy.jpg')] min-h-full ">
      <h2 className="text-2xl text-center font-bold">Featured Surveys Section</h2>
      <p className="font-extralight text-center">The "Featured Surveys" section is designed to highlight and showcase selected surveys prominently on a webpage. This section serves as an engaging and informative area where users can quickly access important or popular surveys. Here’s a breakdown of the key components and design considerations for this section</p>
      <Mostvote></Mostvote>
     </div>
     <div className="mt-10">
     <h2 className="text-2xl text-center font-bold mt-10">Latest Surveys Section</h2>
      <p className="font-extralight text-center">The "Latest Surveys" section is designed to display the most recent surveys available, keeping the users informed about new opportunities to participate or gain insights. This section is typically placed prominently on a webpage to attract attention and encourage user engagement. Below is a detailed description of the key components and design considerations for this section</p>
      <Latest></Latest>
     </div>
     <div className="mt-20">
     <h2 className="text-2xl text-center font-bold">How to work Section</h2>
      <p className="font-extralight text-center">There are significant growth opportunities in the development of advanced AI applications and the expansion of Internet of Things</p>
       <Work></Work>
     </div>
     <Faq></Faq>
     

     </div>
  )
};

export default Home;
