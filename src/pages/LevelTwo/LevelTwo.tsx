import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { JobApplicationFormSchema } from "../../schemas/formSchema";
import { useState } from "react";

type JobApplicationFormData = z.infer<typeof JobApplicationFormSchema>;

function JobApplicationForm() {
  const [previousData, setPreviousData] = useState<JobApplicationFormData[]>(
    []
  );

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(JobApplicationFormSchema),
    mode: "onChange",
  });

  const position = watch("applyingForPosition");

  const onSubmit = (data: JobApplicationFormData) => {
    console.log(data);
    localStorage.setItem("JobApplicationFormData", JSON.stringify(data));

    setPreviousData((prev) => [...prev, data]);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Job Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="applyingForPosition"
            className="block text-sm font-medium text-gray-700"
          >
            Applying for Position
          </label>
          <select
            id="applyingForPosition"
            {...register("applyingForPosition")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {["Developer", "Designer"].includes(position) && (
          <div>
            <label
              htmlFor="relevantExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Relevant Experience (Years)
            </label>
            <input
              id="relevantExperience"
              type="number"
              {...register("relevantExperience")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.relevantExperience && (
              <p className="text-red-500 text-xs italic">
                {errors.relevantExperience.message}
              </p>
            )}
          </div>
        )}

        {position === "Designer" && (
          <div>
            <label
              htmlFor="portfolioURL"
              className="block text-sm font-medium text-gray-700"
            >
              Portfolio URL
            </label>
            <input
              id="portfolioURL"
              type="text"
              {...register("portfolioURL")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.portfolioURL && (
              <p className="text-red-500 text-xs italic">
                {errors.portfolioURL.message}
              </p>
            )}
          </div>
        )}

        {position === "Manager" && (
          <div>
            <label
              htmlFor="managementExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Management Experience
            </label>
            <textarea
              id="managementExperience"
              {...register("managementExperience")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.managementExperience && (
              <p className="text-red-500 text-xs italic">
                {errors.managementExperience.message}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Additional Skills
          </label>
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value="JavaScript"
              {...register("additionalSkills")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor="skills"
              className="ml-2 block text-sm text-gray-900"
            >
              JavaScript
            </label>
          </div>
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value="CSS"
              {...register("additionalSkills")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor="skills"
              className="ml-2 block text-sm text-gray-900"
            >
              CSS
            </label>
          </div>
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value="Python"
              {...register("additionalSkills")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor="skills"
              className="ml-2 block text-sm text-gray-900"
            >
              Python
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="preferredInterviewTime"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Interview Time
          </label>
          <Controller
            control={control}
            name="preferredInterviewTime"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                type="datetime-local"
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                value={value ? new Date(value).toISOString().slice(0, 16) : ""}
                ref={ref}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
          {errors.preferredInterviewTime && (
            <p className="text-red-500 text-xs italic">
              {errors.preferredInterviewTime.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
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
                  <strong>Phone Number:</strong> {data.phoneNumber}
                </div>
                <div>
                  <strong>Applying for Position:</strong>{" "}
                  {data.applyingForPosition}
                </div>
                <div>
                  <strong>Relevant Experience:</strong>{" "}
                  {data.relevantExperience}
                </div>
                <div>
                  <strong>Portfolio URL:</strong>{" "}
                  {data.portfolioURL || "Not provided"}
                </div>
                <div>
                  <strong>Management Experience:</strong>{" "}
                  {data.managementExperience || "Not provided"}
                </div>
                <div>
                  <strong>Additional Skills:</strong>{" "}
                  {data.additionalSkills.join(", ")}
                </div>
                <div>
                  <strong>Preferred Interview Time:</strong>{" "}
                  {data.preferredInterviewTime.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default JobApplicationForm;
