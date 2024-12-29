const Features = () => {
  return (
    <div className="bg-[url('/assets/stupid_curvy_line.png')] bg-no-repeat bg-center bg-contain p-8">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
        How We Help You to Achieve Their Dream Job
      </h2>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/3 p-6 bg-blue-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Understanding You and Your Goals
          </h3>
          <p className="text-gray-700">
            We start by getting to know you. Through a series of thoughtful
            questions, we dig into:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Your Interests: What excites you about your field?</li>
            <li>Your Strengths: What are you naturally good at?</li>
            <li>
              Your Dream Job: What&apos;s the role or company you aspire to work
              for?
            </li>
          </ul>
          <p className="mt-6">
            This helps us create a clear picture of your career aspirations and
            sets the foundation for our process.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/3 p-6 bg-purple-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">
            Resume Review
          </h3>
          <p className="text-gray-700">
            Your resume is your first impression on potential employers. , and
            we take it seriously.
          </p>
          <p className="text-gray-700">
            We go through your resume with a fine-tooth comb, looking for:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Strengths to highlight</li>
            <li>Areas that need improvement</li>
            <li>Missing elements that could make your application stand out</li>
            <li>
              Whether it’s adjusting the format or adding impactful
              descriptions, we ensure your resume reflects your true potential
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/3 p-6 bg-green-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Video Call Consultation
          </h3>
          <p className="text-gray-700">
            Next, we connect with you on a video call. This is a personalized
            session where we:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Dive deeper into your career aspirations</li>
            <li>Discuss your current challenges in finding a job</li>
            <li>
              Explore your skills, experience, and educational background in
              detail
            </li>
            <li>
              Address any questions or concerns you have about the job search
              process
            </li>
          </ul>
          <p className="mt-6">
            This conversation allows us to understand you better and identify
            areas where you might be falling short
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/3 p-6 bg-yellow-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-yellow-700 mb-4">
            Identifying the Gaps
          </h3>
          <p className="text-gray-700">
            After thoroughly analyzing your resume, goals, and responses during
            the call, we focus on identifying the gaps that may be holding you
            back
          </p>
          <p className="text-gray-700 mt-6">These could include:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Missing technical or soft skills</li>
            <li>Limited practical experience</li>
            <li>
              A lack of certifications or projects relevant to your desired role
            </li>
          </ul>
          <p className="mt-6">
            Our goal is to pinpoint exactly what’s standing between you and your
            dream job
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 p-6 bg-red-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-red-700 mb-4">
            Actionable Guidance
          </h3>
          <p className="text-gray-700">
            Once we’ve identified your gaps, we create a personalized
            improvement plan for you. This comes in the form of a detailed PDF
            that includes:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>
              Areas to Improve: A clear breakdown of the skills, knowledge, or
              experience you need to work on.
            </li>
            <li>
              Action Steps: Practical advice on how to bridge those gaps, such
              as online courses, certifications, or projects.
            </li>
            <li>
              Additional Resources: Links to free and paid tools, platforms, and
              materials tailored to your goals.
            </li>
            <li>
              Success Plan: A roadmap to help you steadily increase your chances
              of landing your dream job.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/3 p-6 bg-cyan-50 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">
            Supporting Your Journey
          </h3>
          <p className="text-gray-700">
            We don’t stop at giving advice—we empower you to take action.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Our recommendations are designed to be achievable and realistic.
            </li>
            <li>
              We encourage you to reach out if you need further clarification or
              assistance.
            </li>
            <li>
              By following our guidance, you’ll steadily build the skills,
              experience, and confidence needed to achieve your career goals.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
