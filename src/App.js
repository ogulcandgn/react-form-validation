import "./App.css";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import validationSchema from "./components/Validations";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { handleChange, handleBlur, values, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        password: "",
        confirmPassword: "",
        email: "",
        city: "",
        agree: false,
      },

      validationSchema,
    });
  return (
    <div className="container mt-5 p-0 ">
      <div className="brand-box">
        <h1>Üye Kayıt Formu</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="magic-form">
        <h1>Kayıt Adımları</h1>
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="name" className="mb-1">
              İsim
            </label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="name"
              name="name"
              className="form-control "
              placeholder="Lütfen isim giriniz"
            />

            {errors.name && touched.name && (
              <div className="text-danger my-2">{errors.name}</div>
            )}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="surname" className="mb-1">
              Soyisim
            </label>
            <input
              type="text"
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              id="surname"
              className="form-control"
              placeholder="Lütfen soyadınızı giriniz"
            />
            {errors.surname && touched.surname && (
              <div className="text-danger my-2">{errors.surname}</div>
            )}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="mb-1">
              Şifreniz
            </label>
            <input
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              className="form-control"
              placeholder="Lütfen şifrenizi giriniz"
            />
            {errors.password && touched.password && (
              <div className="text-danger my-2">{errors.password}</div>
            )}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="confirmPassword" className="mb-1">
              Şifre tekrar
            </label>
            <input
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              className="form-control"
              placeholder="Lütfen yukarıdaki şifrenin aynısını giriniz"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="text-danger">{errors.confirmPassword}</div>
            )}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className="mb-1 ">
              E-mail
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              name="email"
              className="form-control "
              placeholder="Lütfen e-mail giriniz"
            />
            {errors.email && touched.email && (
              <div className="text-danger my-2">{errors.email}</div>
            )}
          </div>

          <div className="form-group mb-2">
            <label htmlFor="city" className="mb-1">
              Nerede Yaşıyorsun
            </label>
            <select
              name="city"
              id="city"
              className="form-select"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" label="Şehir seç.." />
              <option value="İstanbul" label="İstanbul" />
              <option value="Ankara" label="Ankara" />
              <option value="İzmir" label="İzmir" />
            </select>
            {errors.city && touched.city && (
              <div className="text-danger my-2">{errors.city}</div>
            )}
          </div>
          <div className="form-group mt-3 mb-2 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">
              <BrowserRouter>
                <Link className="my-2">Sözleşmeyi Kabul Ediyorum.</Link>
              </BrowserRouter>
            </label>
          </div>
          <div className="form-group mb-2">
            <button className="btn btn-primary px-5 mt-2">Kaydol</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
