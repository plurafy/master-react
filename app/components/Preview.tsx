export const Preview = ({
  name,
  children,
  output,
}: {
  name: string;
  children: React.ReactNode;
  output: string;
}) => {
  return (
    <div className="grid mb-8 bg-neutral-primary-soft border border-default border-zinc-200 rounded-base shadow-xs md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col  p-8 text-center border-b border-default border-zinc-200 rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
        <blockquote className="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
          <h3 className="text-lg font-semibold text-heading">
            Preview: {name}
          </h3>
        </blockquote>
        <figcaption className="flex">
          <div className="my-4">{children}</div>
        </figcaption>
      </figure>
      <figure className="flex flex-col p-8 text-center border-b border-default border-zinc-200 rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
        <blockquote className="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
          <h3 className="text-lg font-semibold text-heading">Output</h3>
        </blockquote>
        <figcaption className="flex">
          <div className="space-y-0.5 text-left rtl:text-right ms-2">
            <pre>{output}</pre>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
