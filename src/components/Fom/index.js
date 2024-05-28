import { useForm, Controller } from "react-hook-form";
import { Flex, Input } from "antd";
import SubmitButton from "../SubmitButton";
import { simulateRequest } from "../../helpers/utils";
import { useRequest } from "ahooks";
import { FormDiv, InputDiv, InputError } from "./styles";
import { setUserInfo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { run, loading } = useRequest(simulateRequest, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        localStorage.setItem("isAuth", true);
        dispatch(setUserInfo(result.email, result.userName));
        navigate("/people", { replace: true });
      }
    },
  });

  return (
    <FormDiv>
      <form onSubmit={handleSubmit(run)}>
        <Flex align="flex-start" gap="small" vertical>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <InputDiv>
                <Input
                  {...field}
                  status={errors?.email ? "error" : ""}
                  placeholder="Enter your email"
                />
                <InputError>
                  <span hidden={!errors?.email}>{errors?.email?.message}</span>
                </InputError>
              </InputDiv>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[',"+\-_])/,
                message: "Invalid password",
              },
            }}
            render={({ field }) => (
              <InputDiv>
                <Input.Password
                  {...field}
                  status={errors?.password ? "error" : ""}
                  placeholder="Enter your password"
                />
                <InputError>
                  <span hidden={!errors?.password}>
                    {errors?.password?.message}
                  </span>
                </InputError>
              </InputDiv>
            )}
          />
          <SubmitButton isLoading={loading} />
        </Flex>
      </form>
    </FormDiv>
  );
};

export default Form;
