import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import b2bitLogo from "../assets/b2bit-logo.png";
import axiosInstance from "../axiosInstance";

const Login: React.FC = () => {
  document.title = "B2bit - Login";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const url = "/auth/login/";

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        url,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json;version=v1_web",
          },
        }
      );

      localStorage.setItem("accessToken", response.data.tokens.access);
      navigate("/profile");
    } catch (error: any) {
      if (error.response) {
        setError(
          error.response.data.detail ||
            error.response.data.email[0] ||
            error.response.data.password[0]
        );
      } else {
        console.error("Erro:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-bgLoginPage">
      <div className="flex flex-col items-center shadow-loginPage px-6 rounded-2xl bg-white">
        <img src={b2bitLogo} alt="B2Bit Logo" className="w-72 mb-9 mt-14" />

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="font-nunito font-bold text-lg mb-2">
            E-mail
          </label>
          {email === "" && error === "Este campo não pode ser em branco." && (
            <p className="text-red-500 font-nunito font-bold text-sm">
              {error}
            </p>
          )}
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-cinzab2bit rounded-lg px-4 py-3 pb-3 font-nunito font-normal text-base outline-none mb-7"
            placeholder="@gmail.com"
          />

          <label
            htmlFor="password"
            className="font-nunito font-bold text-lg mb-2"
          >
            Password
          </label>
          {password === "" &&
            error === "Este campo não pode ser em branco." && (
              <p className="text-red-500 font-nunito font-bold text-sm">
                {error}
              </p>
            )}

          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-cinzab2bit rounded-lg px-4 py-3 pb-3 font-nunito placeholder:font-black text-base outline-none"
            placeholder="****************"
          />
          {error === "Usuário e/ou senha incorreto(s)" && (
            <p className="text-red-500 font-nunito font-bold text-sm">
              {error}
            </p>
          )}

          <Button
            type="submit"
            text="Sign In"
            className="bg-azulB2bit rounded-lg text-white font-nunito font-bold p-4 text-lg mt-9 w-96 mb-10 hover:bg-azulB2bitHover transition ease-in-out duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export { Login };
