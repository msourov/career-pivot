import { Button, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="text-center md:w-1/3 md:m-16 m-6 space-y-10 self-center">
          <p>
            A successful career isn’t built overnight. It’s crafted with the
            right guidance, consistent persistence, and the essential tools
            needed to thrive. Your dream job is out there, and we’re here to
            prepare you every step of the way. Start your career journey with
            us, and together, we’ll create a path toward your future.
          </p>
          <Button
            variant="outline"
            className="shadow-lg"
            w={160}
            color="black"
            onClick={() => navigate("/signup")}
          >
            Register
          </Button>
        </div>
        <div>
          <Image src="/assets/hero.png" />
        </div>
      </div>

      <div className="h-16 w-full bg-purple-900"></div>
    </div>
  );
};

export default Hero;
