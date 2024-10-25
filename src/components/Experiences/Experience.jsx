import React from "react";
import "./Experiences.css";

const Experience = () => {
  const experiences = [
    {
      title: "SQA Engineer",
      company: "Bitmorpher Ltd.",
      duration: "Aug 2021 - Present",
      description: `Bitmorpher Limited is a software development company specializing in mobile applications for the iOS App Store, with more than 10+ subscription-based mobile applications.`,
      accomplishments: [
        "Design, develop, and execute test cases to qualify multi-platform web and mobile applications (Android, iOS).",
        "Involved in all stages of the testing process, including development of test procedures and test cases based on requirements for regression tests.",
        "Create test scenarios and strategy for Test Driven Development.",
        "Perform QA Smoke, Acceptance, Regression, Function, UI, Usability, and Compatibility Testing.",
        "Work closely with developers, qualifying code and providing useful debug information.",
        "Participate in all phases of test execution and documentation.",
        "In charge of bug tracking and reporting using JIRA and Bugzilla.",
        "Automate test cases and suites for Regression Testing via Selenium Web Driver.",
        "Categorize bugs and prioritize tasks.",
      ],
    },
    {
      title: "Jr. SQA Engineer",
      company: "Spectrum IT Solution Ltd.",
      duration: "Jan 2021 - Jul 2021",
      description: `Spectrum IT Solutions Ltd. is a software development company with expertise in ERP solutions, Biometric Authentication, Digital Identity, and Mobile App Development.`,
      accomplishments: [
        "Mobile application (Android, iOS) and web testing for financial services, license management, and E-ticketing systems.",
        "Requirements analysis and test case preparation.",
        "Documented bugs in JIRA.",
        "Test planning, test case writing, test run creation, execution, and report generation using a test management tool.",
        "Provided client support for user acceptance testing.",
        "Executed integration and system testing, regression and sanity test suites.",
        "Analyzed logs and troubleshoot root cause of defects.",
      ],
    },
  ];
  return (
    <>
      <div id="experience" className="py-10">
        <div className="maxWidth mx-auto ">
          <div className="title-line mb-10"></div>
          <div className="text-center mb-10 flex justify-center items-center">
            <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
              Work Experience
            </h1>
          </div>
          <div className="title-line mt-4"></div>
        </div>
      </div>

      <div>
        <div className="maxWidth mx-auto py-10 px-5">
          <div className="md:flex md:gap-10">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl shadow-green-500 rounded-lg mb-8 p-6 border border-gray-200 "
              >
                <h2 className="text-2xl font-semibold text-green-600">
                  {experience.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {experience.company} - {experience.duration}
                </p>
                <p className="text-gray-700 mt-4">{experience.description}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {experience.accomplishments.map((item, idx) => (
                    <li key={idx} className="text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
