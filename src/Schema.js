import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required().min(3).max(25),
  description: yup.string().required().min(5).max(800),
  date: yup.string().required()
}).required();