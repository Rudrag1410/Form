import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { SurveyFormSchema } from "../../schemas/formSchema";
import { z } from "zod";
import { useEffect, useState } from "react";

type SurveyFormData = z.infer<typeof SurveyFormSchema>;

const SurveyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<SurveyFormData>({
    resolver: zodResolver(SurveyFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      surveyTopic: undefined,
      favoriteProgrammingLanguage: "",
      yearsOfExperience: 0,
      fieldOfStudy: "",
      feedback: "",
    },
  });
  const [previousData, setPreviousData] = useState<SurveyFormData[]>([]);
  const surveyTopic = watch("surveyTopic");

  const onSubmit = (data: SurveyFormData) => {
    console.log(data);
    localStorage.setItem("surveyFormData", JSON.stringify(data));

    setPreviousData((prev) => [...prev, data]);
    reset();
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem("surveyFormData");
    if (savedFormData) {
      setPreviousData([JSON.parse(savedFormData)]);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Survey Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <Label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </Label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Label
            htmlFor="surveyTopic"
            className="block text-sm font-medium text-gray-700"
          >
            Survey Topic
          </Label>
          <select
            id="surveyTopic"
            {...register("surveyTopic")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          >
            <option value="">Select a Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && (
            <p className="text-red-500 text-xs">{errors.surveyTopic.message}</p>
          )}
        </div>

        {surveyTopic === "Technology" && (
          <>
            <div className="mb-4">
              <Label
                htmlFor="favoriteProgrammingLanguage"
                className="block text-sm font-medium text-gray-700"
              >
                Favorite Programming Language
              </Label>
              <select
                id="favoriteProgrammingLanguage"
                {...register("favoriteProgrammingLanguage")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              >
                <option value="">Select a Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteProgrammingLanguage && (
                <p className="text-red-500 text-xs">
                  {errors.favoriteProgrammingLanguage.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="yearsOfExperience"
                className="block text-sm font-medium text-gray-700"
              >
                Years of Experience
              </Label>
              <input
                type="number"
                id="yearsOfExperience"
                {...register("yearsOfExperience", { valueAsNumber: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
              {errors.yearsOfExperience && (
                <p className="text-red-500 text-xs">
                  {errors.yearsOfExperience.message}
                </p>
              )}
            </div>
          </>
        )}

        {surveyTopic === "Health" && (
          <>
            <div className="mb-4">
              <Label
                htmlFor="exerciseFrequency"
                className="block text-sm font-medium text-gray-700"
              >
                Exercise Frequency
              </Label>
              <select
                id="exerciseFrequency"
                {...register("exerciseFrequency")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              >
                <option value="">Select Frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && (
                <p className="text-red-500 text-xs">
                  {errors.exerciseFrequency.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="dietPreference"
                className="block text-sm font-medium text-gray-700"
              >
                Diet Preference
              </Label>
              <select
                id="dietPreference"
                {...register("dietPreference")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              >
                <option value="">Select Diet</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference && (
                <p className="text-red-500 text-xs">
                  {errors.dietPreference.message}
                </p>
              )}
            </div>
          </>
        )}

        {surveyTopic === "Education" && (
          <>
            <div className="mb-4">
              <Label
                htmlFor="highestQualification"
                className="block text-sm font-medium text-gray-700"
              >
                Highest Qualification
              </Label>
              <select
                id="highestQualification"
                {...register("highestQualification")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              >
                <option value="">Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.highestQualification && (
                <p className="text-red-500 text-xs">
                  {errors.highestQualification.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="fieldOfStudy"
                className="block text-sm font-medium text-gray-700"
              >
                Field of Study
              </Label>
              <input
                type="text"
                id="fieldOfStudy"
                {...register("fieldOfStudy")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
              {errors.fieldOfStudy && (
                <p className="text-red-500 text-xs">
                  {errors.fieldOfStudy.message}
                </p>
              )}
            </div>
          </>
        )}

        <div className="mb-4">
          <Label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700"
          >
            Feedback
          </Label>
          <textarea
            id="feedback"
            {...register("feedback")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Survey
          </button>
        </div>
      </form>
      {previousData.length > 0 && (
        <div className="mt-4 p-4 bg-gray-200 rounded-md shadow">
          <h3 className="text-lg font-bold">Previous Submitted Data:</h3>
          <ul>
            {previousData.map((data, index) => (
              <li key={index} className="mt-2 border-b border-black pb-2">
                <div>
                  <strong>Name:</strong> {data.fullName}
                </div>
                <div>
                  <strong>Email:</strong> {data.email}
                </div>
                <div>
                  <strong>Survey Topic:</strong> {data.surveyTopic}
                </div>
                {data.surveyTopic === "Technology" && (
                  <>
                    <div>
                      <strong>Favorite Programming Language:</strong>{" "}
                      {data.favoriteProgrammingLanguage}
                    </div>
                    <div>
                      <strong>Years of Experience:</strong>{" "}
                      {data.yearsOfExperience}
                    </div>
                  </>
                )}
                {data.surveyTopic === "Health" && (
                  <>
                    <div>
                      <strong>Exercise Frequency:</strong>{" "}
                      {data.exerciseFrequency}
                    </div>
                    <div>
                      <strong>Diet Preference:</strong> {data.dietPreference}
                    </div>
                  </>
                )}
                {data.surveyTopic === "Education" && (
                  <>
                    <div>
                      <strong>Highest Qualification:</strong>{" "}
                      {data.highestQualification}
                    </div>
                    <div>
                      <strong>Field of Study:</strong> {data.fieldOfStudy}
                    </div>
                  </>
                )}
                <div>
                  <strong>Feedback:</strong> {data.feedback}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
