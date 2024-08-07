import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradientbg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        //"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id == 6} && flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full opacity-80"
        } `}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            //   width={220}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>

      {id === 6 && (
        // add background animation , remove the p tag
        <BackgroundGradientAnimation>
          <div className="relative z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
        {/* remove mb-2 mt-2 */}
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
