// import { useField } from "@/hooks/useField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(6),
});

type FormSchemaType = z.infer<typeof schema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const processForm = () => {
    reset();
  };

  return (
    <div className="container-sign">
      <div className="container-form-sing">
        <p>o usa tú cuenta de email</p>
        <form className="form-sign" onSubmit={handleSubmit(processForm)}>
          <div className="email">
            <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />
            <input
              {...register("email", { required: true })}
              name="email"
              type="email"
              placeholder="Email"
            />
            {errors.email?.message && <span>{errors.email.message}</span>}
          </div>
          <div className="password">
            <img src="https://img.icons8.com/material-outlined/24/000000/password.png" />
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            {errors.password?.message && <span>{errors.password.message}</span>}
          </div>
          <Link to="/">
            <p>Olvidó su contraseña?</p>
          </Link>
          <div className="container-sign">
            <input type="submit" value="Inicia sesion" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
