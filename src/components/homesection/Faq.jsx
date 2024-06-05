const Faq = () => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-2xl font-bold text-center mt-8">
        Here give some frequently question answer
      </h2>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200 mt-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What do you think is the most significant trend in the IT industry today?
          </div>
          <div className="collapse-content">
            <p>
            The most significant trend in the IT industry today is the increasing adoption of artificial intelligence and machine learning technologies.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How has cloud computing impacted your organization?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Cloud computing has significantly improved our operational efficiency, scalability, and cost-effectiveness.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What emerging technology do you believe will have the greatest impact on the IT industry in the next five years?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Quantum computing is expected to have the greatest impact, revolutionizing data processing capabilities
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What skills do you believe are most important for success in the IT industry?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Key skills include proficiency in programming languages, strong problem-solving abilities, and a good understanding of cybersecurity.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What is the biggest challenge your organization is currently facing in the IT sector?
          </div>
          <div className="collapse-content">
            <p>
            The biggest challenge is ensuring robust cybersecurity measures to protect against increasingly sophisticated cyber threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
