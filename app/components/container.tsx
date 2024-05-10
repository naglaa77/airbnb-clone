'use client'

type ContainerProps = {
    children: React.ReactNode;
};


export function Container({children}: ContainerProps) {
  return (
    <div className="max-w-[2520px] mx-auto px-4 xl:px-20 md:px-10 sm:px-2 ">
      {children}
    </div>
  );
}