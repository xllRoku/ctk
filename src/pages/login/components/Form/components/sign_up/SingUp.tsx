import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertInput } from "../../alters/AlertInput";
import { UserSignUp, userSignUpSchema } from "./schema/singUpSchema";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<UserSignUp>({
    resolver: zodResolver(userSignUpSchema), // Configuration the validation with the zod schema.
  });

  const onSubmit = (user: UserSignUp) => {
    console.log("dans onSubmit", user);
    reset();
  };

  return (
    <div className="container-sign">
      <div className="container-form-sing">
        <p>o usa tú cuenta de email para registrarte</p>
        <form className="form-sign" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-username">
            <div
              className={`${
                errors.username?.message ? "username error" : "username"
              }`}
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" />
              <input
                {...register("username")}
                type="text"
                name="username"
                placeholder="Nombre"
              />
            </div>
            {errors.email?.message && (
              <AlertInput>{errors.username?.message}</AlertInput>
            )}
          </div>
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
          <div className="container-sign">
            <input
              type="submit"
              value="Registrate"
              disabled={isSubmitting || (isSubmitted && !isValid)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
