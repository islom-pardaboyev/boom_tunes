import { useDispatch } from "react-redux";
import { useAxios } from "../../hooks/useAxios";
import { CLIENT_ID, CLIENT_SECRET } from "../../hooks/useEnv";
import { AppDispatch } from "../../store";
import { setToken } from "../../store/slice/token-slice";
import { hatch } from "ldrs";

hatch.register();

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  useAxios()
    .post("", {
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })
    .then((res) => dispatch(setToken({ access_token: res.data.access_token })));
  return (
    <section className="w-full h-screen bg-primary text-white flex flex-col items-center justify-center">
      <l-hatch size="50" stroke="4" speed="3.5" color="white"></l-hatch>
      <h1 className="mt-10">
        Loading... <br /> Just Wait!
      </h1>
    </section>
  );
}

export default Login;
