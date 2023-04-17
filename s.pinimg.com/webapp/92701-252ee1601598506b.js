"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[92701],{96527:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(32425),o=n(71445),a=n(796874);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,e);var t,n,r,i=u(d);function d(){var e;s(this,d);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(f(e=i.call.apply(i,[this].concat(n))),"state",{error:null,info:null}),p(f(e),"resetError",(function(){e.setState({error:null,info:null})})),e}return t=d,(n=[{key:"componentDidCatch",value:function(e,t){try{var n=this.props.name,r=this.props.type||"secondary";(0,a.T)({errorBoundary:n,errorBoundaryType:r,message:e.message,name:e.name,stack:e.stack}),o.Z.increment("react.error_boundary",.1,{component:void 0,name:this.props.name})}catch(i){o.Z.increment("react.error_boundary.error",1,{name:this.props.name})}this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props.renderErrorState,t=this.state,n=t.error,r=t.info;return n&&r?e?e({error:n,info:r,resetError:this.resetError}):null:this.props.children}}])&&l(t.prototype,n),r&&l(t,r),d}(r.Component)},53930:function(e,t,n){var r=n(96527);t.Z=r.Z},456168:function(e,t,n){n.d(t,{$:function(){return o}});var r=(0,n(487889).Z)("viewer"),o=r.Provider,a=r.useHook;t.Z=a},892701:function(e,t,n){n.d(t,{Z:function(){return oe}});var r=n(53930),o=n(71445),a=n(918511),i=n(364032),s=n(14320),l=n(32425),c=n(569066),u=n(873844),d=n(260259);function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e,t){var n=function(e,t){switch(t.type){case"SET_FORM_VIEW":return h(h({},e),{},{view:"form",viewText:""});case"SET_VIEW":return h(h({},e),{},{view:t.payload.view,viewText:t.payload.viewText,isSubmitting:!1});case"CLEAR_FORM_ERRORS":return h(h({},e),{},{validationErrors:[]});case"SET_FORM_ERRORS":return h(h({},e),{},{validationErrors:t.payload,isSubmitting:!1});case"UPDATE_SELECTED_PORTION":var n=f(e.selectedPortion),r=t.payload,o=r.portion,a=r.selected;return h(h({},e),{},{selectedPortion:a?[].concat(f(n),[o]):n.filter((function(e){return e!==o}))});case"UPDATE_SELECTED_LAW":var i=f(e.selectedLaws),s=t.payload,l=s.law,c=s.selected;return h(h({},e),{},{selectedLaws:c?[].concat(f(i),[l]):i.filter((function(e){return e!==l}))});case"SET_SUBMITTING":return h(h({},e),{},{isSubmitting:!0});case"UPDATE_SELECT_SINGLE_LAW":var u=t.payload.chosenLaw,d=e.selectedLaws.includes(u);return h(h({},e),{},{selectedLaws:d?[]:[u]});default:return e}}(e,t);return h(h({},n),{},{history:[].concat(f(n.history),[t])})},b=n(487889),y=n(821273),_=n.n(y),v=n(710159),x=n(146846),k=n(885949);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={netzdg:{LAW:"netzdg",DECIDER_KEY:"legal_webapp_takedown_form_netzdg",COUNTRY_CODES:["DE"],API:"/v3/legal/takedowns/netzdg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1},turkey:{LAW:"turkey",DECIDER_KEY:"legal_webapp_takedown_form_turkey",COUNTRY_CODES:["TR"],API:"/v3/legal/takedowns/turkey/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0},koplg:{LAW:"koplg",DECIDER_KEY:"legal_webapp_takedown_form_koplg",COUNTRY_CODES:["AT"],API:"/v3/legal/takedowns/koplg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1},test:{LAW:"test",DECIDER_KEY:"legal_webapp_takedown_form_test",COUNTRY_CODES:["US"],API:"/v3/legal/takedowns/test/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){s=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=(0,b.Z)("TakedownsContext"),G=I.Provider,D=I.useHook,R={history:[],view:"form",formRef:null,validationErrors:[],selectedPortion:[],selectedLaws:[],isSubmitting:!1};function N(e){var t=e.law,n=e.translationOverride,r=void 0===n?{}:n,o=e.children,a=function(e,t){var n=(0,v.ZP)(),r={test:{header:"Test Header",subHeader:"Test SubHeader",laws:["Test Law A","Test Law B"]},netzdg:{header:n._("NetzDG Complaint Form","Takedown.NetzDG.FormTitle","The title of the form"),subHeader:n._("Use this form to identify content that violates German laws that are subject to the Netzwerkdurchsetzungsgesetz (NetzDG). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.","Takedown.NetzDG.FormDescription","Provides a description of what the form is used for"),laws:[n._("Dissemination of propaganda material of unconstitutional organizations (Section 86 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Using symbols of unconstitutional organizations (Section 86a StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Preparation of a serious violent offense endangering the state (Section 89a StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Encouraging the commission of a serious violent offense endangering the state (Section 91 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Treasonous forgery (Section 100a StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Public incitement to crime (Section 111 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Breach of the public peace by threatening to commit offenses (Section 126 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Forming criminal organizations (Section 129 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Forming terrorist organizations (Section 129a StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Criminal and terrorist organizations abroad; extended confiscation and deprivation (Section 129b StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Incitement to hatred (Section 130 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Dissemination of depictions of violence (Section 131 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Rewarding and approving of criminal offenses (Section 140 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Disturbing the exercise of religion (Section 166 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Making available child pornography by broadcasting, media services, or telecommunication services (Section 184b/184d StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Insult (Section 185 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Defamation (Section 186 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Intentional Defamation (Section 187 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Violation of intimate privacy by taking photographs (Section 201a StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Threatening the commission of a felony (Section 241 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown"),n._("Forgery of data intended to provide proof (Section 269 StGB)","Takedown.NetzDG.Law","These are German laws which a user can report a pin for takedown")]},turkey:{header:n._("Turkey Social Media Complaint Form","Takedown.Turkey.FormSubHeader","The title of the form"),subHeader:n._("Use this form to identify content that violates Turkish laws that are subject to the Turkey Social Media Law. Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.","Takedown.Turkey.FormSubheader","The sub-title of the form"),laws:[n._("Personal rights violation","Takedown.Turkey.Law.Personal","These are laws which a user can report a pin for takedown"),n._("Privacy rights violation","Takedown.Turkey.Law.Privacy","These are laws which a user can report a pin for takedown")]},koplg:{header:n._("Austria KoPl-G Form","AustriaKoPl-G.FormTitle","The title of the form"),subHeader:n._("Use this form to identify content that violates Austrian laws that are subject to the Kommunikationsplattformen-Gesetz (KoPl-G). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.","AustriaKoPl-G.FormDescription","Provides a description of what the form is used for"),laws:["Nötigung","Gefährliche Drohung","Beharrliche Verfolgung","Fortdauernde Belästigung im Wege einer Telekommunikation","Vorwurf einer schon abgetanen gerichtlich strafbaren Handlung","Beleidigung","Unbefugte Bildaufnahmen","Erpressung","Herabwürdigung religiöser Lehren","Pornographische Darstellungen Minderjähriger","Anbahnung von Sexualkontakten zu Unmündigen","Terroristische Vereinigung","Anleitung zur Begehung einer terroristischen Straftat","Anleitung zu terroristischen Straftaten und Gutheißung terroristischer Straftaten","Verhetzung","Nazionalsozialistische Propaganga"]}},o={header:n._("Complaint Information","AustriaKoPl-G.ComplaintInformation.Header","Complaint Information header"),reportedUrl:n._("Identify the URL of the content","AustriaKoPl-G.ContentUrlField","The url of the content the user wants to report"),reportedUrlHelperText:n._("Please provide the full URL of the content you are complaining about. 1 URL per form.","AustriaKoPl-G.ComplaintInformation.ContentUrl.HelperText","Complaint Information url field helper text"),contentPortionHeader:n._("What portion(s) of the content are you reporting?","AustriaKoPl-G.ContentReporting.Header","Header describing which part of the content the user is reporting"),lawsViolatedLabel:n._("Which law(s) do you believe the content violates?","AustriaKoPl-G.ContentReporting.Header","Header describing which part of the content the user is reporting"),otherLabel:n._("Enter other portion of content","AustriaKoPl-G.ContentPortion.OtherValue","Field to describe other portion of the pin they are reporting"),additionalInformationLabel:n._("Additional information on illegality of content (Optional)","AustriaKoPl-G.ContentReporting.Header","Header describing which part of the content the user is reporting"),additionalInformationPlaceholder:n._("250 character limit...","AustriaKoPl-G.ContentReporting.Header","Header describing which part of the content the user is reporting")},a={contactHeader:n._("Contact Information","TakedownsContactInformation.OwnerInformationHeading","Heading with the word Owner Information"),companyCheckbox:n._("Do you represent a complaints office? (Yes)","TakedownsContactInformation.ComplaintsOfficeValidation","Checkbox to determine if represents a complaints office"),company:n._("Complaints office","TakedownsContactInformation.ComplaintsOfficeNameField","The name of the organization or office submitting the complaint"),name:n._("Name of Reporter","TakedownsContactInformation.NameField","User's name"),email:n._("Email Address","TakedownsContactInformation.EmailField","User's email address"),phone:n._("Phone Number","TakedownsContactInformation.PhoneField","Users phone number"),address:n._("Full Address","TakedownsContactInformation.AddressField","User address")},i={termsHeading:n._("By checking the following boxes, I confirm:","TakedownsForm.LabelForCheckboxes","Label describing the checkboxes"),isAccurate:n._("The information in this application is accurate.","TakedownsContactInformation.isAccurateBoolean","Confirmation checkbox that information in form is accurate"),consequences:n._("I understand that if I use this form to submit fraudulent or abusive complaints, I might be subject to claims of liability by Pinterest or other third parties.","temp","temp"),terms:(0,k.jsx)(x.xv,{children:n._("I have a good faith belief that the content violates the law(s) identified.","TakedownsContactInformation.termsBoolean","Checkbox to confirm they are owner of items they are claiming")}),submitText:n._("Submit","TakedownsForm.SubmitApplication","Submit application form"),cancelText:n._("Cancel","TakedownsForm.CancelApplication","Cancel application form"),errorCallout:n._("Please fill out all required fields before submitting the application","CCP.AppValidationCallout","Call out that lets user know there's a validation error ")},s={pin_image:n._("Pin Image / Video","TakedownsForm.ContentPortion.Image","Checkbox content portion for Image"),pin_description:n._("Pin Description","TakedownsForm.ContentPortion.Description","Checkbox content portion for Description"),pin_notes:n._("Pin Comments/Notes","TakedownsForm.ContentPortion.Notes","Checkbox content portion for Notes"),profile_image:n._("Profile Image","TakedownsForm.ContentPortion.Image","Checkbox content portion for Image"),profile_name:n._("Profile Name","TakedownsForm.ContentPortion.Name","Checkbox content portion for Name"),profile_description:n._("Profile Description","TakedownsForm.ContentPortion.Description","Checkbox content portion for Description"),board_name:n._("Board Name","TakedownsForm.ContentPortion.Name","Checkbox content portion for Name"),board_description:n._("Board Description","TakedownsForm.ContentPortion.Description","Checkbox content portion for Description"),other:n._("Other...","TakedownsForm.ContentPortion.Other","Checkbox content portion for Other")},l=_()(C(C(C(C(C({},{takedown:r[e]}),{contactInformation:a}),{complaints:o}),{terms:i}),{reportedPortion:s}),t);return _()(C(C({},{configuration:j[e]}),{translations:l}))}(t,r),i=(0,l.useRef)(null),s=A((0,l.useReducer)(g,P(P({},R),{},{formRef:i})),2),c=s[0],u=s[1],d=(0,l.useMemo)((function(){return{state:c,dispatch:u,takedown:a}}),[c,u,a]);return(0,k.jsx)(G,{value:d,children:o})}function Z(){var e=(0,d.TH)(),t=new URLSearchParams(e.search).get("pinId"),n=t?"https://www.pinterest.com/pin/".concat(t):"",r=D(),o=r.state,a=r.dispatch,i=r.takedown,s=i.translations,f=i.configuration,m=o.selectedPortion,p=o.selectedLaws,h=o.validationErrors,w=void 0===h?[]:h,g=s.reportedPortion,b=s.takedown.laws,y=f.RESTRICT_MULTIPLE_LAWS,_=s.complaints,v=_.header,T=_.reportedUrl,C=_.reportedUrlHelperText,S=_.contentPortionHeader,j=_.lawsViolatedLabel,O=_.otherLabel,P=_.additionalInformationLabel,E=_.additionalInformationPlaceholder,A=m.includes("other"),L=function(e){var t;return(null===(t=w.find((function(t){return t.field===e})))||void 0===t?void 0:t.message)||""};return(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)(x.xu,{column:12,smColumn:4,paddingY:2,children:(0,k.jsx)(x.X6,{size:"sm",color:"darkGray",children:v})}),(0,k.jsxs)(x.xu,{column:12,smColumn:8,display:"flex",direction:"row",wrap:!0,paddingY:2,children:[(0,k.jsx)(c.Z,{name:"reported_url",validationErrors:w,helperText:C,value:n,label:T}),(0,k.jsx)(x.xu,{padding:2,column:12,marginTop:4,children:(0,k.jsx)(x.xv,{size:"md",weight:"bold",children:S})}),(0,k.jsx)(x.xu,{padding:2,marginStart:4,children:(0,k.jsx)(x.pg,{id:"reportedContent",legend:"reportedContent",legendDisplay:"hidden",errorMessage:L("reportedContent"),children:(0,k.jsx)(x.kC,{direction:"column",gap:2,children:Object.keys(g).map((function(e){return(0,k.jsx)(x.XZ,{id:"portion-".concat(e),name:"reportedContent",checked:!!m.includes(e),label:g[e],onChange:function(t){var n=t.checked;a({type:"UPDATE_SELECTED_PORTION",payload:{portion:e,selected:n}})}},"portion-".concat(e))}))})})}),A&&(0,k.jsx)(c.Z,{col:12,name:"reportedContent_other",validationErrors:w,label:O}),(0,k.jsx)(x.xu,{padding:2,column:12,marginTop:4,children:(0,k.jsx)(x.xv,{size:"md",weight:"bold",children:j})}),(0,k.jsx)(x.xu,{padding:2,marginStart:4,children:(0,k.jsx)(x.pg,{id:"selectedLaws",legend:"selectedLaws",legendDisplay:"hidden",errorMessage:L("selectedLaws"),children:y&&(0,k.jsx)(x.kC,{direction:"column",gap:2,children:b.map((function(e){return(0,k.jsx)(x.EU,{id:"checkbox-".concat(e),name:"selectedLaws",checked:!!p.includes(e),label:e,value:e,onChange:function(){a({type:"UPDATE_SELECT_SINGLE_LAW",payload:{chosenLaw:e}})}},"checkbox-".concat(e))}))})||(0,k.jsx)(x.kC,{direction:"column",gap:2,children:b.map((function(e){return(0,k.jsx)(x.XZ,{id:"checkbox-".concat(e),name:"selectedLaws",checked:!!p.includes(e),label:e,onChange:function(t){var n=t.checked;a({type:"UPDATE_SELECTED_LAW",payload:{law:e,selected:n}})}},"checkbox-".concat(e))}))})})}),(0,k.jsx)(x.xu,{padding:2,column:12,marginTop:4,children:(0,k.jsx)(x.xv,{size:"md",weight:"bold",children:P})}),(0,k.jsx)(u.Z,{name:"additional_details",placeholder:E,validationErrors:w})]})]})}var z=n(456168);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){s=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(){var e=(0,z.Z)(),t=F((0,l.useState)(!1),2),n=t[0],r=t[1],o=D(),a=o.state,i=o.takedown,s=i.translations,u=i.configuration,d=s.contactInformation,f=d.contactHeader,m=d.companyCheckbox,p=d.name,h=d.company,w=d.email,g=d.phone,b=d.address,y=a.validationErrors,_=void 0===y?[]:y,v=u.COMPLAINTS_OFFICE;return(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)(x.xu,{column:12,smColumn:4,paddingY:2,children:(0,k.jsx)(x.X6,{size:"sm",color:"darkGray",accessibilityLevel:2,children:f})}),(0,k.jsxs)(x.xu,{column:12,smColumn:8,display:"flex",direction:"row",wrap:!0,paddingY:2,children:[v&&(0,k.jsx)(x.xu,{column:12,padding:2,children:(0,k.jsx)(x.XZ,{checked:n,id:"checkbox-complains-office-validation",name:"company_checkbox",label:m,onChange:function(){r((function(e){return!e}))}})}),(0,k.jsx)(c.Z,{name:"name",value:"",validationErrors:_,label:p}),v&&(0,k.jsx)(c.Z,{name:"company",disabled:!n,validationErrors:_,label:h}),(0,k.jsx)(c.Z,{name:"email",value:e.isAuth&&e.email||"",validationErrors:_,label:w}),(0,k.jsx)(c.Z,{name:"phone",type:"text",validationErrors:_,label:g}),(0,k.jsx)(c.Z,{col:12,name:"address",validationErrors:_,label:b})]})]})}function U(){var e=D().takedown.translations.takedown,t=e.header,n=e.subHeader;return(0,k.jsx)(x.xu,{column:12,alignItems:"center",direction:"column",display:"flex",padding:2,marginBottom:4,children:(0,k.jsxs)(x.xu,{display:"flex",direction:"column",column:12,smColumn:10,mdColumn:8,lgColumn:6,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(x.X6,{size:"md",align:"center",color:"darkGray",accessibilityLevel:1,children:t}),(0,k.jsx)(x.xu,{paddingY:1,children:(0,k.jsx)(x.xv,{size:"lg",align:"center",children:n})})]})})}var H=n(433349);function q(){var e=(0,d.k6)(),t=D(),n=t.state,r=t.takedown.translations.terms,o=n.validationErrors,a=void 0===o?[]:o;return(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)(x.xu,{column:12,smColumn:4,paddingY:2,children:(0,k.jsx)(x.X6,{size:"sm",color:"darkGray",children:r.termsHeading})}),(0,k.jsx)(x.xu,{column:12,smColumn:8,display:"flex",direction:"row",wrap:!0,paddingY:2,children:(0,k.jsxs)(x.xu,{paddingX:4,marginBottom:6,children:[(0,k.jsx)(H.Z,{name:"is_accurate",validationErrors:a,label:r.isAccurate}),(0,k.jsx)(H.Z,{name:"terms",validationErrors:a,label:r.terms}),(0,k.jsx)(H.Z,{name:"understood_consequences",validationErrors:a,label:r.consequences})]})}),!!a.length&&(0,k.jsx)(x.xu,{padding:4,width:"100%",children:(0,k.jsx)(x.UW,{type:"error",iconAccessibilityLabel:"Error icon",message:r.errorCallout})}),(0,k.jsxs)(x.xu,{margin:-2,display:"flex",justifyContent:"end",column:12,children:[(0,k.jsx)(x.xu,{padding:2,children:(0,k.jsx)(x.zx,{onClick:function(){return e.replace("/")},text:r.cancelText,type:"button"})}),(0,k.jsx)(x.xu,{padding:2,children:(0,k.jsx)(x.zx,{color:"red",text:r.submitText,type:"submit",disabled:n.isSubmitting})})]})]})}var K=n(724207),W=n(930855),V=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,Y=function(e){var t=e.required,n=e.boolean,r=e.reportedContent,o=e.phone,a=e.selectedLaws;return W.Ry().shape({company_checkbox:W.Z_(),company:W.Z_().when("company_checkbox",{is:function(e){return"on"===e},then:W.Z_().required(t),otherwise:W.Z_()}),name:W.Z_().required(t),email:W.Z_().email().required(t),phone:W.Z_().matches(V,o).required(t),address:W.Z_().required(t),reported_url:W.Z_().required(t),reportedContent:W.Z_().required(r),reportedContent_other:W.Z_().test("reportedContent",t,(function(e){return void 0===e||!!e&&e.length>0})),selectedLaws:W.Z_().required(a),is_accurate:W.Z_().required(n),terms:W.Z_().required(n),understood_consequences:W.Z_().required(n)})},X=n(123686);function $(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n,r,o,a,i){try{var s=e[a](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,o)}function ee(){var e=(0,v.ZP)(),t=D(),n=t.state,r=t.dispatch,a=t.takedown,i=n.formRef,s=n.selectedPortion,l=n.selectedLaws,c={required:e._("Required","AustriaKoPl-G.ValidationRequired","The validation message for a Required field"),phone:e._("Valid phone number required","AustriaKoPl-G.ValidationRequired","The validation message for a Required field"),boolean:e._("Must be checked","AustriaKoPl-G.ValidationBooleanRequired","The validation message for a Boolean field"),onlinePresence:e._("One of the online presence fields must be entered","AustriaKoPl-G.ValidationOnlineRequired","The validation message for a Online field"),signature:e._("Electronic signature doesn't match your name","AustriaKoPl-G.ValidationSignatureRequired","The validation message for a Signature field"),reportedContent:e._("At least one content portion must be selected","AustriaKoPl-G.ValidationError.SelectedLaws","Validation error when no laws are selected"),selectedLaws:e._("At least one law must be selected","AustriaKoPl-G.ValidationError.SelectedLaws","Validation error when no laws are selected")};return{submit:function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var u,d,f,m,p,h,w,g,b,y,_,v,x,k,T,C,S,j,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r({type:"SET_SUBMITTING"}),u=null==i?void 0:i.current,d=null!==u?Object.fromEntries(new FormData(u).entries()):{},t.prev=4,t.next=7,Y(c).validate(d,{abortEarly:!1});case 7:r({type:"CLEAR_FORM_ERRORS"}),d.reported_sections=$(s.filter((function(e){return"other"!==e}))),d.reportedContent_other&&(d.reported_sections.push(d.reportedContent_other),delete d.reportedContent_other),d.violation_reasons=l,t.next=19;break;case 13:return t.prev=13,t.t0=t.catch(4),f=null===t.t0||void 0===t.t0?void 0:t.t0.inner.map((function(e){return{field:e.path,message:e.message}})),r({type:"SET_FORM_ERRORS",payload:f}),o.Z.increment("webapp.metrics.legal.takedown.form.validation_error",1,{law:a.configuration.LAW,error_fields:JSON.stringify(f.map((function(e){return e.field})))}),t.abrupt("return",!1);case 19:return t.prev=19,m=d.name,p=d.email,h=d.address,w=d.phone,g=d.violation_reasons,b=d.reported_sections,y=d.additional_details,_=d.reported_url,v=d.company,x={owner:JSON.stringify({name:m,email:p,address:h,phone:w,company:v}),request_module_param:JSON.stringify({violation_reasons:g,reported_sections:b,additional_details:y}),reported_url:_,signed_name:m},k=K.ZP.create("ApiResource",{url:a.configuration.API,data:x}),t.next=25,k.callCreate({showError:!1});case 25:T=t.sent,C=T.resource_response,S=(null==C?void 0:C.data)||"",j=(0,X.nk)(e._("Your request id: #{{requestId}}","AustriaKoPl-G.SuccessfulApplicationSubmission.RequestID","The request id for the complain submission"),{requestId:S}).join(""),o.Z.increment("webapp.metrics.legal.takedown.form.submit_success",1,{law:a.configuration.LAW}),r({type:"SET_VIEW",payload:{view:"success",viewText:j}}),t.next=38;break;case 33:t.prev=33,t.t1=t.catch(19),O=t.t1.message_detail||t.t1.message||"",o.Z.increment("webapp.metrics.legal.takedown.form.submit_error",1,{law:a.configuration.LAW,error_message:O}),r({type:"SET_VIEW",payload:{view:"error",viewText:O}});case 38:return t.abrupt("return",null);case 39:case"end":return t.stop()}}),t,null,[[4,13],[19,33]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(e){Q(a,r,o,i,s,"next",e)}function s(e){Q(a,r,o,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}()}}function te(){var e=D(),t=e.state,n=e.dispatch,r=ee().submit,o=t.view,l=t.viewText,c=(0,v.ZP)();return(0,k.jsx)(x.xu,{column:12,paddingX:10,marginBottom:8,display:"flex",justifyContent:"center",children:(0,k.jsxs)(x.xu,{column:12,smColumn:10,lgColumn:8,color:"white",children:[(0,k.jsx)(U,{}),(0,k.jsx)(x.iz,{}),(0,k.jsx)(x.xu,{color:"white",padding:2,paddingY:4,children:(0,k.jsx)("form",{ref:t.formRef,onSubmit:r,id:"copyright-app-form",children:(0,k.jsxs)(x.kC,{alignItems:"stretch",justifyContent:"start",wrap:!0,children:[(0,k.jsx)(M,{}),(0,k.jsx)(Z,{}),(0,k.jsx)(q,{})]})})}),"error"===o&&l&&(0,k.jsx)(a.Z,{dismiss:function(){return n({type:"SET_FORM_VIEW"})},error:l}),"success"===o&&l&&(0,k.jsx)(s.Z,{title:c._("Thank you for your submission","AustriaKoPl-G.SuccessfulApplicationSubmission.Title","The modal title for the successful submission of form"),message:l}),"maintenance"===o&&l&&(0,k.jsx)(i.Z,{})]})})}var ne=n(952733),re="NO_LAW_CONFIGURATION";function oe(e){var t=e.translationOverride,n=e.lawOverride,a=(0,d.k6)(),i=(0,z.Z)(),s=(0,ne.B)(),l=s.countryFromIp,c=s.isInternalIP,u=(0,d.$B)().params.lawName,f=i.isAuth&&i.country,m=l,p=n||u||re;p&&p!==re||(o.Z.increment("webapp.metrics.legal.takedown.form.no_valid_law",1,{law:p,user:i.isAuth&&i.fullName}),a.replace("/"));var h=(j[p]||{}).COUNTRY_CODES.some((function(e){return[f,m].includes(e)}));return i.isEmployee||h||c||(o.Z.increment("webapp.metrics.legal.takedown.form.no_access",1,{law:p,user:i.isAuth&&i.fullName,user_country:f,user_country_from_ip:l}),a.replace("/")),o.Z.increment("webapp.metrics.legal.takedown.form.entry_success",1,{law:p}),(0,k.jsx)(r.Z,{name:"TakedownsFormContainer",children:(0,k.jsx)(N,{law:p,translationOverride:t,children:(0,k.jsx)(te,{})})})}},918511:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(916389),o=n(710159),a=n(146846),i=n(885949);function s(e){var t=e.dismiss,n=e.error,s=(0,o.ZP)();return(0,i.jsx)(r.ZP,{accessibilityModalLabel:s._("Something went wrong modal","ContentClaim.ErrorModal","accessibility label for error modal"),footer:(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.xu,{marginBottom:2,display:"flex",justifyContent:"end",direction:"row",children:(0,i.jsx)(a.zx,{text:s._("Okay","ContentClaim.ErrorModalOkButton","accessibility label for reinstate modal confirm button"),color:"red",onClick:t})})}),heading:s._("Something went wrong","ContentClaim.ModalHeader","Header for modal"),onDismiss:function(){return t()},children:(0,i.jsx)(a.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,i.jsx)(a.xv,{size:"lg",children:n})})})}},364032:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(916389),o=n(710159),a=n(260259),i=n(146846),s=n(885949);function l(){var e=(0,o.ZP)(),t=(0,a.k6)();return(0,s.jsx)(r.ZP,{accessibilityModalLabel:e._("Maintenance Mode Modal","ContentClaimApplication.Maintenance","accessibility label for maintenance modal"),footer:(0,s.jsx)(i.xu,{column:12,marginBottom:2,display:"flex",direction:"row",justifyContent:"end",children:(0,s.jsx)(i.zx,{text:e._("Okay","ContentClaimApplication.SuccessModalOkButton","accessibility label for reinstate modal confirm button"),color:"red",onClick:function(){return t.push("/")}})}),heading:e._("Currently in maintenance","ContentClaimApplication.MaintenanceModalHeader","Maintenance Modal Heading"),onDismiss:function(){return t.replace("/")},children:(0,s.jsx)(i.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,s.jsx)(i.xv,{size:"lg",children:e._("This page is currently in maintenance, please try again later","ContentClaimApplication.Maintenance","accessibility label for maintenance modal")})})})}},14320:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(916389),o=n(710159),a=n(260259),i=n(146846),s=n(885949);function l(e){var t=e.title,n=e.message,l=(0,o.ZP)(),c=(0,a.k6)();return(0,s.jsx)(r.ZP,{accessibilityModalLabel:l._("Thank you for applying success modal","ContentClaimApplication.SuccessModal","accessibility label for success modal"),footer:(0,s.jsx)(i.xu,{column:12,marginBottom:2,display:"flex",direction:"row",justifyContent:"end",children:(0,s.jsx)(i.zx,{text:l._("Okay","ContentClaimApplication.SuccessModalOkButton","accessibility label for reinstate modal confirm button"),color:"red",onClick:function(){return c.push("/")}})}),heading:t||l._("Thank you for applying","ContentClaimApplication.ModalHeaderSubmitted","Displays the header used in the Success Modals"),onDismiss:function(){c.push("/")},children:(0,s.jsx)(i.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,s.jsx)(i.xv,{size:"lg",inline:!0,children:n})})})}},796874:function(e,t,n){n.d(t,{T:function(){return i},Z:function(){return s}});var r=n(256191),o=n(147064),a=[];function i(e){var t;try{t=JSON.stringify({errorObj:e})}catch(f){t=JSON.stringify({errorObj:{message:e.message,name:"logToServer stringify exception"}})}var n,i,s,l=(n={report_context:JSON.stringify({current_url:window.location.href,client_version:"731987e"}),report_data:t},Object.keys(n).map((function(e){return e+"="+encodeURIComponent(n[e])})).join("&")),c=window.btoa(l);if(-1===a.indexOf(c)){var u=new XMLHttpRequest;u.open("post","/_/_/logClientError/",!0),u.setRequestHeader("Content-type","application/x-www-form-urlencoded");var d=(0,o.H)();d&&u.setRequestHeader("X-Pinterest-PWS-Handler",d),u.setRequestHeader("X-CSRFToken",(i=r.fS,2===(s=("; "+document.cookie).split("; "+i.name+"=")).length?s.pop().split(";").shift():"")),u.send(l),a.push(c)}a.length>100&&a.shift()}function s(){window.addEventListener("error",(function(e){var t=e.error||{};i({name:t.name,message:t.message||e.message,stack:t.stack,filename:e.filename,line:e.lineno,column:e.colno})})),window.addEventListener("unhandledrejection",(function(e){var t,n,r,o,a;if((null==e?void 0:e.reason)instanceof Error){var s=e.reason,l="string"==typeof(null==s?void 0:s.message)?s.message:String(s);i({name:null!==(t=null==s?void 0:s.name)&&void 0!==t?t:"unhandledrejection",message:l,message_detail:null==s?void 0:s.message_detail,original_message:null==s?void 0:s.original_message,stack:null==s?void 0:s.stack,filename:null==s?void 0:s.fileName,line:null!==(n=null!==(r=null==s?void 0:s.lineno)&&void 0!==r?r:null==s?void 0:s.line)&&void 0!==n?n:null==s?void 0:s.lineNumber,column:null!==(o=null!==(a=null==s?void 0:s.column)&&void 0!==a?a:null==s?void 0:s.colno)&&void 0!==o?o:null==s?void 0:s.columnNumber})}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/92701-252ee1601598506b.js.map