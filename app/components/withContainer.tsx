export const withContainer = (Component: React.ComponentType) => {
  return (props: any) => (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <div className="max-w-4xl w-full space-y-6 p-4">
        <Component {...props} />
      </div>
    </div>
  );
};
