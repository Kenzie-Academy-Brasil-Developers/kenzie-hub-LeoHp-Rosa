import * as yup from "yup";

export const registerCheck = yup.object().shape({
  name: yup.string().required("O nome é obrigatório!").min(3).max(100),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("Favor fornecer um e-mail valido"),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário ao menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário ao menos um caractere especial"
    )
    .min(8, "A senha deve conter ao menos 8 caracteres"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser identicas")
    .required("A confirmação de senha é necessaria!"),
  bio: yup
    .string()
    .required(
      "Não seja timido nos conte mais sobre você, é necessario informar algo sobre você!"
    )
    .min(5)
    .max(100),
  contact: yup
    .string()
    .required("É necessario um telefone ou email para contato"),
  course_module: yup
    .string()
    .required("Informe o modulo para identificarmos sua turma"),
});
