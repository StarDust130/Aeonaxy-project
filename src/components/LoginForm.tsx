import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

interface LoginFormProps {
  handleLoginStep1: () => void;
}

const LoginForm = ({ handleLoginStep1 }: LoginFormProps) => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <LeftSide />
        <RightSide handleLoginStep1={handleLoginStep1} />
      </div>
    </section>
  );
};

export default LoginForm;
