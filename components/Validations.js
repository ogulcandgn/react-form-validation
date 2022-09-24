import * as yup from "yup";
//initial values'de hangi key'ler verildiyse aşağıdada onu kullanmalıyız(name,password vs)
const validationSchema = yup.object({
  //geçerli bir email adresi girilmesi && required => istenilen şekilde mail adresinin girilmesini zorunlu kıldı
  name: yup
    .string()
    .min(3, "Adınız en az üç karakterli olmalı")
    .required("İsim boş bırakılamaz"),
  surname: yup
    .string()
    .min(4, "Soyadınız en az dört karakterli olmalı")
    .required("Soyad boş bırakılamaz"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Şifre alanı boş bırakılamaz"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Şifreleriniz aynı olmalı"),
  email: yup
    .string()
    .email("Düzgün bir email girmeniz gerekmekte")
    .required("E-mail boş bırakılamaz"),

  agree: yup.boolean().required("Koşulları kabul ediyorum."),
  city: yup
    .string()
    .required("Herhangi bir şehir seçmelisin")
    .oneOf(["İstanbul", "Ankara", "İzmir"]),
});
export default validationSchema;
