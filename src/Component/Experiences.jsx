import { WORK_EXPERIENCE } from "../lib/const.js";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card.jsx";

const Experience = () => {
  return (
    <section className="w-full flex flex-col gap-10 justify-center pt-20">
      <span className="text-3xl md:text-5xl font-semibold text-center">
        Experiences
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-6 lg:px-14">
        {WORK_EXPERIENCE.map((value, index) => (
          <a
            key={index}
            href={value.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Card className="relative text-center border-0 bg-card shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-primary/10 h-72 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-grow ">
                <span className="text-lg lg:text-2xl">{value.description}</span>
                <span>{value.tech}</span>
              </CardContent>
              <CardFooter className="justify-center">
                <span>{value.duration}</span>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
