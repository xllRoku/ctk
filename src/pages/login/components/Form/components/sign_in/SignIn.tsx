// import { useField } from "@/hooks/useField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignIn, userSignInSchema } from "./schema/signInSchema";
import { AlertInput } from "../../alters/AlertInput";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<UserSignIn>({
    resolver: zodResolver(userSignInSchema), // Configuration the validation with the zod schema.
  });

  const onSubmit = (user: UserSignIn) => {
    console.log("dans onSubmit", user);
    reset();
  };

  return (
    <div className="container-sign">
      <div className="container-form-sing">
        <p>o usa tú cuenta de email</p>
        <form className="form-sign" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-email">
            <div
              className={`${errors.email?.message ? "email error" : "email"}`}
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />
              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            {errors.email?.message && (
              <AlertInput>{errors?.email?.message}</AlertInput>
            )}
          </div>
          <div className="container-password">
            <div
              className={`${
                errors.password?.message ? "password error" : "password"
              }`}
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/password.png" />
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                placeholder="Contraseña"
              />
            </div>
            {errors.password?.message && (
              <AlertInput>{errors?.password?.message}</AlertInput>
            )}
          </div>
          <Link to="/">
            <p>Olvidó su contraseña?</p>
          </Link>
          <div className="container-sign">
            <input
              type="submit"
              value="Inicia sesion"
              disabled={isSubmitting || (isSubmitted && !isValid)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
