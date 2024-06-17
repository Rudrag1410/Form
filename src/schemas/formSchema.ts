import { z } from 'zod';

export const formSchema = z.object({
   name: z.string().nonempty("Name is required"),
   email: z.string().email("Invalid email address"),
   age: z.number().positive("Age must be greater than 0"),
   attendingWithGuest: z.enum(["yes", "no"]),
   guestName: z.string().optional(),
}).superRefine((values, ctx) => {
   if (values.attendingWithGuest === "yes" && !values.guestName) {
      ctx.addIssue({
         code: z.ZodIssueCode.custom,
         message: "Guest name is required when attending with a guest",
         path: ["guestName"],
      });
   }
});

export const JobApplicationFormSchema = z.object({
   fullName: z.string().nonempty("Full Name is required"),
   email: z.string().email("Invalid email format"),
   phoneNumber: z.string().regex(/^\d+$/, "Phone number must be numeric").nonempty("Phone number is required"),
   applyingForPosition: z.enum(["Developer", "Designer", "Manager"]),
   relevantExperience: z.string().optional().refine(val => !isNaN(Number(val)), {
      message: "Relevant Experience must be a number",
   }).transform(val => Number(val)), // Convert string to number
   portfolioURL: z.string().url().optional(),
   managementExperience: z.string().optional(),
   additionalSkills: z.array(z.string()).nonempty("At least one skill must be selected"),
   preferredInterviewTime: z.string().transform(val => new Date(val)),
});

export const SurveyFormSchema = z.object({
   fullName: z.string().min(1, "Full name is required"),
   email: z.string().email("Enter a valid email"),
   surveyTopic: z.enum(["Technology", "Health", "Education"]),
   favoriteProgrammingLanguage: z.string().optional(),
   yearsOfExperience: z.number().optional(),
   exerciseFrequency: z.enum(["Daily", "Weekly", "Monthly", "Rarely"]).optional(),
   dietPreference: z.enum(["Vegetarian", "Vegan", "Non-Vegetarian"]).optional(),
   highestQualification: z.enum(["High School", "Bachelor's", "Master's", "PhD"]).optional(),
   fieldOfStudy: z.string().optional(),
   feedback: z.string().optional(),
});