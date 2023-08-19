import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signinAPI } from "../../apis/AuthAPI";
import { useDispatch } from "react-redux"
import { user } from "../../global/globalState";
import img from "../../assets/Login.png"

const SignInScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    signinAPI({ email, password }).then((res) => {
      dispatch(user(res))
      navigate("/");
    });
  });

  return (
    <div className="flex w-[100%] medium:flex-col " >
      < div className="w-[50%] h-[100vh] flex flex-col justify-center items-center medium:w-full medium:h-[250px]  "
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        }}

      >
        <div className="text-[40px] font-ath3 " >Start Learnning Today</div>
        <div>The #1 Platform to Learn</div>
      </div>

      {/* ?enter form */}
      <div className="w-[50%] flex justify-center items-center h-[100vh] medium:h-[calc(100vh-250px)] medium:w-full"


      >
        <form onSubmit={onSubmit} className="flex flex-col justify-center">



          {/*  Email Input SetUp starts */}
          <div className="flex flex-col items-start mb-2 ">
            <label className="text-[12px] font-semibold ">Enter Email</label>
            <input
              placeholder="Enter your Email"
              className="w-[300px] border p-2 text-[14px] rounded "
              {...register("email")}
            />
            {errors.email?.message && (
              <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 ">
                Email Error
              </label>
            )}
          </div>
          {/*  Email Input SetUp ends */}

          {/*  Password Input SetUp starts */}
          <div className="flex flex-col items-start mb-2 ">
            <label className="text-[12px] font-semibold ">Enter Password</label>
            <input
              placeholder="Enter your Password"
              className="w-[300px] border p-2 text-[14px] rounded "
              {...register("password")}
            />
            {errors.password?.message && (
              <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 ">
                Password Error
              </label>
            )}
          </div>

          {/*  Password Input SetUp ends */}



          {/*  Button  starts */}
          <button
            className="py-3 px-4 my-2 bg-purple-700 text-purple-200 rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center border border-purple-950 "
            type="submit">
            Sign in
          </button>

          <div className="my-4" />
          <hr />
          <div className="mt-4" />
          <div className="flex flex-col items-center w-[300px] text-[12px] ">
            <div>Don't have an Account</div>
            <Link to="/register">
              <span className="font-bold text-purple-500 hover:cursor-pointer decoration-none ">
                Create One here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
