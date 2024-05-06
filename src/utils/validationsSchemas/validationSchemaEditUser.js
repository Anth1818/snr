import * as Yup from "yup";

const validationSchemaEditUser = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Solo se permiten caracteres alfabéticos")
    .max(30, "Máximo 30 caracteres")
    ,
  other_names: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Solo se permiten caracteres alfabéticos")
    .max(30, "Máximo 30 caracteres"),
  first_last_name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Solo se permiten caracteres alfabéticos")
    .max(30, "Máximo 30 caracteres")
    ,
  other_last_names: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Solo se permiten caracteres alfabéticos")
    .max(30, "Máximo 30 caracteres"),

  identity_card: Yup.string()
    
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(7, "Mínimo 7 digitos")
    .max(10, "Máximo 10 digitos"),

  phone: Yup.string()
    .matches(
      /^(0414|0424|0416|0426|0412|0212)\d{7}$/,
      "Ingrese un número válido"
    )
    .max(11, "Máximo 11 digitos"),

  email: Yup.string()
    .matches(
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
      "Ingrese un correo válido"
    )
    ,
});

export default validationSchemaEditUser;