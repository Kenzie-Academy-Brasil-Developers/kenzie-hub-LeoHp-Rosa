import * as yup from "yup";

export const modalCheck = yup.object().shape({
  title: yup
    .string()
    .required("Por favor digite uma tencologia")
    .min(3)
    .max(50),
  status: yup.string().required("Selecione seu nivel nessa tecnologia"),
});
