import BaseInput from "@/components/base/BaseInput.vue";
import BaseTable from "@/components/base/BaseTable.vue";

export default {
  install(app, options) {
    console.log(options);

    if (options?.components == null) {
      app.component("BaseInput", BaseInput);
      app.component("BaseTable", BaseTable);
      return;
    }

    if (options.components.includes("input")) {
      app.component("BaseInput", BaseInput);
    }

    if (options.components.includes("table")) {
      app.component("BaseTable", BaseTable);
    }
  },
};
