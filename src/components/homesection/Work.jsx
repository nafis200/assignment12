
import Workcard from "./Workcard";


const listSurvey = [
    {
      "survey_title": "Impact of Cloud Computing in Modern Businesses",
      "description": "This survey aims to understand how cloud computing is transforming modern businesses, focusing on operational efficiency, scalability, and cost-effectiveness.",
      "how_to_work": "Participants are required to fill out an online questionnaire with multiple-choice and open-ended questions. The estimated time to complete the survey is 15 minutes.",
      "benefit": "Participants will gain insights into the latest cloud computing trends and receive a summary report of the survey findings."
    },
    {
      "survey_title": "AI and Machine Learning Adoption in the IT Industry",
      "description": "This survey explores the adoption and impact of AI and machine learning technologies in the IT industry, including challenges and future prospects.",
      "how_to_work": "Participants need to provide responses to a set of structured questions through an online form. The survey will take approximately 20 minutes to complete.",
      "benefit": "Participants will better understand AI trends and receive early access to the survey results and analysis."
    },
    {
      "survey_title": "Cybersecurity Challenges and Solutions",
      "description": "The focus of this survey is to identify the key cybersecurity challenges faced by IT organizations and the solutions being implemented to mitigate these risks.",
      "how_to_work": "Participants will complete an online survey consisting of multiple-choice questions, which should take around 15 minutes.",
      "benefit": "Participants will learn about effective cybersecurity practices and receive a comprehensive report highlighting the survey results."
    },
    {
      "survey_title": "IT Skills and Professional Development",
      "description": "This survey seeks to understand the most important skills for IT professionals and the professional development opportunities available in the industry.",
      "how_to_work": "Participants are asked to answer a series of questions online, with both quantitative and qualitative responses. The survey should take about 10 minutes to complete.",
      "benefit": "Participants will gain insights into key IT skills and development trends, and receive recommendations for career advancement."
    },
    {
      "survey_title": "Future Trends in the IT Industry",
      "description": "This survey examines the future trends expected to shape the IT industry over the next decade, including emerging technologies and market shifts.",
      "how_to_work": "Participants need to respond to an online questionnaire featuring a mix of closed and open-ended questions. The survey will take approximately 12 minutes to complete.",
      "benefit": "Participants will receive a forecast report on future IT trends and opportunities for strategic planning."
    },
    {
      "survey_title": "Diversity and Inclusion in IT",
      "description": "This survey aims to assess the current state of diversity and inclusion within IT organizations and identify areas for improvement.",
      "how_to_work": "Participants will fill out an online survey with questions related to diversity and inclusion practices. The survey should take around 10 minutes to complete.",
      "benefit": "Participants will gain insights into effective diversity and inclusion strategies and receive a summary of best practices identified through the survey."
    }
  ]
  



const Work = () => {
    
    return (
        <div>
             <div className="mt-4 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {listSurvey.map((data) => (
          <Workcard key={data._id} data={data}></Workcard>
        ))}
      </div> 
        </div>
    );
};

export default Work;