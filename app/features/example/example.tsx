import { Preview } from "~/components/Preview";

export function Example() {
  const output = { message: "Welcome to React Example!" };

  return (
    <Preview name="Tree Component" output={JSON.stringify(output, null, 2)}>
      <p>Welcome to React Example!</p>
    </Preview>
  );
}
