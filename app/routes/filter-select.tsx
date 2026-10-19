import { withContainer } from "~/components/withContainer";
import type { Route } from "./+types/home";
import { FilterSelect } from "~/features/filter-select/FilterSelect";
import { selectOptions } from "~/consts/select-options";

const title = "React Filter Select";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: "React Filter Select Example" },
  ];
}

export const handle = {
  title,
};

const FilterSelectWithContainer = withContainer((props: any) => (
  <>
    <FilterSelect {...props} options={selectOptions} />
    <FilterSelect {...props} options={selectOptions} multiple />
  </>
));

export default FilterSelectWithContainer;
