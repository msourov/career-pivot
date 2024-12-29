const WhyUs = () => {
  return (
    <div>
      <h1 className="w-full text-center text-4xl py-3 bg-purple-900 text-white font-bold">
        Why Out Approach Works
      </h1>
      <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-10 px-6 md:px-20 text-center">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Personalized Solutions
            </h3>
            <p className="text-gray-700 text-lg">
              Every fresher’s journey is unique, and so is our advice.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Focused Guidance
            </h3>
            <p className="text-gray-700 text-lg">
              We help you focus on what truly matters to succeed in your dream
              role.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Expert Insights
            </h3>
            <p className="text-gray-700 text-lg">
              Our experience allows us to provide actionable recommendations
              that align with industry standards.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">
            Conclusion
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We believe that every fresher has the potential to achieve their
            dream job—it just takes the right support and direction. Our process
            is designed to simplify your journey, boost your confidence, and
            give you a clear path to success.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Are you ready to take the next step toward your dream job? Let’s
            make it happen together.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl font-semibold text-purple-800 mb-4">
            Get started with us today, and let’s turn your career aspirations
            into reality!
          </p>
          <button className="bg-purple-800 text-white px-8 py-3 rounded-md text-lg hover:bg-purple-700 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
