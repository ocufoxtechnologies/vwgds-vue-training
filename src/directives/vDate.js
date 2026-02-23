import { format } from "date-fns";

export default {
  mounted(el, bindings) {
    const { value, formatString } = bindings.value;
    const dateString = format(value, formatString ?? "dd/MM/yy");
    // const dateString = bindings.value.toLocaleDateString("en-IN", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // });
    el.innerHTML = dateString;
  },
};
