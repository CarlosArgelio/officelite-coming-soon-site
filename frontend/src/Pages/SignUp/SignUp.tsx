import { Banner, RegisterUserForm } from "./Components";
import { Commig } from "./../../Components";
import { Footer } from "./Components";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 gap-4 h-[100vh]">
      <div className="flex flex-col">
        <Banner viewButton={false} />

        <div className="flex flex-col items-center justify-center gap-6 h-full">
          <p className="uppercase font-bold tracking-widest">
            coming <span className="text-brandeis-blue">4 nov 2020</span>
          </p>

          <div>
            <Commig
              backgroud="bg-royal-blue-opacity"
              numberColor="text-brandeis-blue"
              textColor="text-charcoal opacity-80"
            />
          </div>
          <div>
            <RegisterUserForm />
          </div>
          <div className="w-full h-full">
            <Footer viewComming={false} heigth={320} />
          </div>
        </div>
      </div>
    </div>
  );
};
