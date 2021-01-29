import createTabbedEditor from "@/components/visualizations/editor/createTabbedEditor";

import GeneralSettings from "./GeneralSettings";
import GroupsSettings from "./GroupsSettings";
import FormatSettings from "./FormatSettings";
import StyleSettings from "./StyleSettings";

import ChoroGeneralSettings from "./ChoroGeneralSettings";
import ChoroColorsSettings from "./ChoroColorsSettings";
import ChoroFormatSettings from "./ChoroFormatSettings";
import ChoroBoundsSettings from "./ChoroBoundsSettings";


export default createTabbedEditor([
  { key: "General", title: "General", component: GeneralSettings },
  { key: "Groups", title: "Groups", component: GroupsSettings },
  { key: "Format", title: "Format", component: FormatSettings },
  { key: "Style", title: "Style", component: StyleSettings },

  { key: "ChoroGeneral", title: "ChoroGeneral", component: ChoroGeneralSettings },
  { key: "ChoroColors", title: "ChoroColors", component: ChoroColorsSettings },
  { key: "ChoroFormat", title: "ChoroFormat", component: ChoroFormatSettings },
  { key: "ChoroBounds", title: "ChoroBounds", component: ChoroBoundsSettings },
]);
