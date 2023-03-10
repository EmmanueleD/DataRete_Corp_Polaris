/* eslint-disable vue/multi-word-component-names */
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Chart from "primevue/chart";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Editor from "primevue/editor";
import Fieldset from "primevue/fieldset";
import FileUpload from "primevue/fileupload";
import Image from "primevue/image";
import InlineMessage from "primevue/inlinemessage";
import Inplace from "primevue/inplace";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Galleria from "primevue/galleria";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import OrderList from "primevue/orderlist";
import OrganizationChart from "primevue/organizationchart";
import OverlayPanel from "primevue/overlaypanel";
import Paginator from "primevue/paginator";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import PickList from "primevue/picklist";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";
import RadioButton from "primevue/radiobutton";
import Ripple from "primevue/ripple";
import SelectButton from "primevue/selectbutton";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";
import Slider from "primevue/slider";
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import SpeedDial from "primevue/speeddial";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Steps from "primevue/steps";
import StyleClass from "primevue/styleclass";
import TabMenu from "primevue/tabmenu";
import Tag from "primevue/tag";
import TieredMenu from "primevue/tieredmenu";
import Textarea from "primevue/textarea";
import Timeline from "primevue/timeline";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Toolbar from "primevue/toolbar";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Tooltip from "primevue/tooltip";
import ToggleButton from "primevue/togglebutton";
import Tree from "primevue/tree";
import TreeSelect from "primevue/treeselect";
import TreeTable from "primevue/treetable";
import TriStateCheckbox from "primevue/tristatecheckbox";

class PrimeVueConfigurator {
  constructor() {}

  init(app) {
    app.use(PrimeVue, {
      ripple: true,
      inputStyle: "outlined",
      locale: {
        startsWith: "Inizia con",
        contains: "Contiene",
        notContains: "Non Contiene",
        endsWith: "Finisce con",
        equals: "Uguale",
        notEquals: "Non Uguale",
        noFilter: "Senza Filtro",
        lt: "Minore",
        lte: "Minore o Uguale",
        gt: "Maggiore",
        gte: "Maggiore o Uguale",
        dateIs: "Data Uguale",
        dateIsNot: "Data Diversa",
        dateBefore: "Data Anteriore",
        dateAfter: "Data Successiva",
        clear: "Ricomincia",
        apply: "Applica",
        matchAll: "Uguale per Tutti",
        matchAny: "Uguale per Alcuni",
        addRule: "Aggiungi Regole",
        removeRule: "Rimuovi Regola",
        accept: "Accetta",
        reject: "Rifiuta",
        choose: "Scegli",
        upload: "Upload",
        cancel: "Annulla",
        dayNames: [
          "Domenica",
          "Luned??",
          "Marted??",
          "Mercoled??",
          "Gioved??",
          "Venerd??",
          "Sabato",
        ],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        monthNames: [
          "Gennaio",
          "Febbraio",
          "Marzo",
          "Aprile",
          "Maggio",
          "Giugno",
          "Luglio",
          "Agosto",
          "Settembre",
          "Ottobre",
          "Novembre",
          "Dicembre",
        ],
        monthNamesShort: [
          "Gen",
          "Feb",
          "Mar",
          "Apr",
          "Mag",
          "Giu",
          "Lug",
          "Ago",
          "Set",
          "Ott",
          "Nov",
          "Dic",
        ],
        chooseYear: "Scegli l'Anno",
        chooseMonth: "Scegli il Mese",
        chooseDate: "Scegli la Data",
        prevDecade: "Decade Anteriore",
        nextDecade: "Decade Successiva",
        prevYear: "Anno Prima",
        nextYear: "Anno Dopo",
        prevMonth: "Mese Prima",
        nextMonth: "Mese Dopo",
        prevHour: "Ora Prima",
        nextHour: "Ora Dopo",
        prevMinute: "Minuto Prima",
        nextMinute: "Minuto Dopo",
        prevSecond: "Secondo Prima",
        nextSecond: "Secondo Dopo",
        am: "AM",
        pm: "PM",
        today: "Oggi",
        weekHeader: "Sett.",
        firstDayOfWeek: 0,
        dateFormat: "dd/mm/yy",
        weak: "Debole",
        medium: "Medio",
        strong: "Forte",
        passwordPrompt: "Inserisci la Password",
        emptyFilterMessage: "Risultati non Trovati", // @deprecated Use 'emptySearchMessage' option instead.
        searchMessage: "{0} risultati disponibili",
        selectionMessage: "{0} elementi selezionati",
        emptySelectionMessage: "Nessun elemento selezionato",
        emptySearchMessage: "Risultati non Trovati",
        emptyMessage: "Non ci sono opzioni disponibili",
        aria: {
          trueLabel: "Vero",
          falseLabel: "Falso",
          nullLabel: "Non selezionato",
          star: "1 stella",
          stars: "{star} stelle",
          selectAll: "Tutti gli elementi selezionati",
          unselectAll: "Nessun elemento selezionato",
          close: "Chiudi",
          previous: "Precedente",
          next: "Successivo",
        },
      },
    });
    app.use(ConfirmationService);
    app.use(ToastService);

    app.directive("tooltip", Tooltip);
    app.directive("ripple", Ripple);
    app.directive("badge", BadgeDirective);
    app.directive("styleclass", StyleClass);

    app.component("Accordion", Accordion);
    app.component("AccordionTab", AccordionTab);
    app.component("AutoComplete", AutoComplete);
    app.component("Avatar", Avatar);
    app.component("AvatarGroup", AvatarGroup);
    app.component("Badge", Badge);
    app.component("Breadcrumb", Breadcrumb);
    app.component("Button", Button);
    app.component("Calendar", Calendar);
    app.component("Card", Card);
    app.component("Carousel", Carousel);
    app.component("Chart", Chart);
    app.component("Checkbox", Checkbox);
    app.component("Chip", Chip);
    app.component("Chips", Chips);
    app.component("ColorPicker", ColorPicker);
    app.component("Column", Column);
    app.component("ConfirmDialog", ConfirmDialog);
    app.component("ConfirmPopup", ConfirmPopup);
    app.component("ContextMenu", ContextMenu);
    app.component("DataTable", DataTable);
    app.component("DataView", DataView);
    app.component("DataViewLayoutOptions", DataViewLayoutOptions);
    app.component("Dialog", Dialog);
    app.component("Divider", Divider);
    app.component("Dropdown", Dropdown);
    app.component("Editor", Editor);
    app.component("Fieldset", Fieldset);
    app.component("FileUpload", FileUpload);
    app.component("Image", Image);
    app.component("InlineMessage", InlineMessage);
    app.component("Inplace", Inplace);
    app.component("InputMask", InputMask);
    app.component("InputNumber", InputNumber);
    app.component("InputSwitch", InputSwitch);
    app.component("InputText", InputText);
    app.component("Galleria", Galleria);
    app.component("Knob", Knob);
    app.component("Listbox", Listbox);
    app.component("MegaMenu", MegaMenu);
    app.component("Menu", Menu);
    app.component("Menubar", Menubar);
    app.component("Message", Message);
    app.component("MultiSelect", MultiSelect);
    app.component("OrderList", OrderList);
    app.component("OrganizationChart", OrganizationChart);
    app.component("OverlayPanel", OverlayPanel);
    app.component("Paginator", Paginator);
    app.component("Panel", Panel);
    app.component("PanelMenu", PanelMenu);
    app.component("Password", Password);
    app.component("PickList", PickList);
    app.component("ProgressBar", ProgressBar);
    app.component("RadioButton", RadioButton);
    app.component("Rating", Rating);
    app.component("SelectButton", SelectButton);
    app.component("ScrollPanel", ScrollPanel);
    app.component("ScrollTop", ScrollTop);
    app.component("Slider", Slider);
    app.component("Sidebar", Sidebar);
    app.component("Skeleton", Skeleton);
    app.component("SpeedDial", SpeedDial);
    app.component("SplitButton", SplitButton);
    app.component("Splitter", Splitter);
    app.component("SplitterPanel", SplitterPanel);
    app.component("Steps", Steps);
    app.component("TabMenu", TabMenu);
    app.component("TabView", TabView);
    app.component("TabPanel", TabPanel);
    app.component("Tag", Tag);
    app.component("Textarea", Textarea);
    app.component("TieredMenu", TieredMenu);
    app.component("Timeline", Timeline);
    app.component("Toast", Toast);
    app.component("Toolbar", Toolbar);
    app.component("ToggleButton", ToggleButton);
    app.component("Tree", Tree);
    app.component("TreeSelect", TreeSelect);
    app.component("TreeTable", TreeTable);
    app.component("TriStateCheckbox", TriStateCheckbox);
  }
}

export default new PrimeVueConfigurator();
