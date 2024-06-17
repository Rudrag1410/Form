import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Label } from "@radix-ui/react-label";
import { formSchema } from "../../schemas/formSchema";

type FormData = z.infer<typeof formSchema>;

const HomePage: React.FC = () => {
  const [previousData, setPreviousData] = useState<FormData[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
      attendingWithGuest: "no",
      guestName: "",
    },
  });

  const attendingWithGuest = watch("attendingWithGuest");

  useEffect(() => {
    // Load previous data from session storage
    const loadedData = sessionStorage.getItem("formData");
    if (loadedData) {
      setPreviousData(JSON.parse(loadedData));
    }
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted successfully:", data);
    const newData = [...previousData, data];
    setPreviousData(newData);
    sessionStorage.setItem("formData", JSON.stringify(newData)); // Save to session storage
    reset();
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Event Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </Label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="mt-1 block w-full border p-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
            className="mt-1 block w-full border p-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </Label>
          <input
            type="number"
            id="age"
            {...register("age", { valueAsNumber: true })}
            className="mt-1 block w-full border p-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Label
            htmlFor="attendingWithGuest"
            className="block text-sm font-medium text-gray-700"
          >
            Are you attending with a guest?
          </Label>
          <select
            id="attendingWithGuest"
            {...register("attendingWithGuest")}
            className="mt-1 block w-full border  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {errors.attendingWithGuest && (
            <p className="text-red-500 text-sm mt-1">
              {errors.attendingWithGuest.message}
            </p>
          )}
        </div>
        {attendingWithGuest === "yes" && (
          <div className="mb-4">
            <Label
              htmlFor="guestName"
              className="block text-sm font-medium text-gray-700"
            >
              Guest Name
            </Label>
            <input
              type="text"
              id="guestName"
              {...register("guestName")}
              className="mt-1 block w-full border p-4 border-gray-300 rounded-md 
              h-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.guestName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guestName.message}
              </p>
            )}
          </div>
        )}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
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
                  <strong>Name:</strong> {data.name}
                </div>
                <div>
                  <strong>Email:</strong> {data.email}
                </div>
                <div>
                  <strong>Age:</strong> {data.age}
                </div>
                <div>
                  <strong>Attending With Guest:</strong>{" "}
                  {data.attendingWithGuest}
                </div>
                {data.attendingWithGuest === "yes" && (
                  <div>
                    <strong>Guest Name:</strong> {data.guestName}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
