const m = require("mithril");

const PageTitle = {
  view: ({ attrs }) =>
    <div class="page-title">
      <h1>{attrs.title}</h1>
    </div>,

};

export default PageTitle;
