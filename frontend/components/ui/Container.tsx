import { ChildrenAsProps } from "@/types";

const Container = (props: ChildrenAsProps) => {
  return (
    <section className="min-w-md mx-auto mt-10 p-6 shadow-md shadow-amber-200 rounded-xl bg-(--color-foreground)">
      <div className="text-(--color-background) text-4xl text-ellipsis text-left md:text-center">
        {props.children}
      </div>
    </section>
  );
};

export default Container;
