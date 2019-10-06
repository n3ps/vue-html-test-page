'use strict';

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('main',[_c('h1',[_vm._v("HTML5 Element Test Page")]),_vm._v(" "),_c('p',[_vm._v("Common HTML5 elements for CSS testing purposes.")]),_vm._v(" "),_c('h1',[_vm._v("Formatting")]),_vm._v(" "),_c('p',[_vm._v("\n      This sentence is\n      "),_c('b',[_vm._v("bold")]),_vm._v(". If you like semantics, you might go with\n      "),_c('strong',[_vm._v("strong")]),_vm._v(" or\n      "),_c('em',[_vm._v("emphasized")]),_vm._v(" text. If not,\n      "),_c('i',[_vm._v("italic")]),_vm._v(" is still around.\n      "),_c('small',[_vm._v("Small")]),_vm._v(" text is for fine print. Your copy can also be\n      "),_c('sub',[_vm._v("subscripted")]),_vm._v(" and\n      "),_c('sup',[_vm._v("superscripted")]),_vm._v(",\n      "),_c('ins',[_vm._v("inserted")]),_vm._v(",\n      "),_c('del',[_vm._v("deleted")]),_vm._v(", or\n      "),_c('mark',[_vm._v("highlighted")]),_vm._v(". You would use a\n      "),_c('a',{attrs:{"href":"#!"}},[_vm._v("hyperlink")]),_vm._v(" to go to a new page.\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      If you like to write about there are plenty of semantic tags for you. There's the generic\n      "),_c('code',[_vm._v("code")]),_vm._v(", as well as\n      "),_c('kbd',[_vm._v("keyboard input")]),_vm._v(",\n      "),_c('samp',[_vm._v("computer output")]),_vm._v(", and\n      "),_c('var',[_vm._v("variables")]),_vm._v(".\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      You might have need of a\n      "),_c('cite',[_vm._v("citation")]),_vm._v(",\n      "),_c('q',[_vm._v("short quotation")]),_vm._v(",\n      "),_c('abbr',[_vm._v("abbreviation")]),_vm._v(", or\n      "),_c('dfn',[_vm._v("definition")]),_vm._v(". It might be\n      "),_c('time',[_vm._v("10:00pm")]),_vm._v(".\n    ")]),_vm._v(" "),_c('address',[_c('p',[_vm._v("\n        123 Fake Street\n        "),_c('br'),_vm._v("Springfield, USA\n      ")])]),_vm._v(" "),_c('h2',[_vm._v("Blockquote")]),_vm._v(" "),_c('blockquote',[_vm._v("\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam molestiae et assumenda molestias alias ut saepe doloribus, porro, deleniti neque, harum minus, commodi laudantium quod excepturi nam corrupti odit provident.\n      "),_c('cite',[_vm._v("- Blockquote Citation")])]),_vm._v(" "),_c('h2',[_vm._v("Preformatted Text")]),_vm._v(" "),_c('pre',[_vm._v("class Voila {\n      public:\n        // Voila\n        static const string VOILA = \"Voila\";\n      }\n      ")]),_vm._v(" "),_c('h2',[_vm._v("Horizontal Line")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('h1',[_vm._v("Headings")]),_vm._v(" "),_c('h1',[_vm._v("First Heading h1")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea delectus cupiditate minima, magni possimus commodi, eveniet? Rem, adipisci architecto pariatur libero aliquid culpa sunt accusantium. Ipsa error aliquid et! Animi.")]),_vm._v(" "),_c('h2',[_vm._v("Second Heading h2")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia molestias ullam quasi est a nemo, accusamus voluptatum autem. Eius explicabo est assumenda voluptatem id, hic maxime mollitia facere debitis quos.")]),_vm._v(" "),_c('h3',[_vm._v("Third Heading h3")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti, repudiandae rerum nam laborum eligendi aperiam. Autem id, ad necessitatibus accusantium, facilis, quae ullam est, voluptates debitis fugiat quos inventore!")]),_vm._v(" "),_c('h4',[_vm._v("Fourth Heading h4")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cum eum eligendi voluptatum quasi nisi doloremque ipsam unde, laboriosam nihil voluptatem consequatur quam non similique vero ratione animi sit veritatis.")]),_vm._v(" "),_c('h5',[_vm._v("Fifth Heading h5")]),_vm._v(" "),_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatem necessitatibus eos iusto nam deserunt, dicta possimus error qui reiciendis, aut dolore magnam eligendi maiores expedita commodi perferendis non blanditiis.")]),_vm._v(" "),_c('h1',[_vm._v("Lists")]),_vm._v(" "),_c('h2',[_vm._v("Unordered list")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n        List item one\n        "),_c('ul',[_c('li',[_vm._v("Nested list item")])])]),_vm._v(" "),_c('li',[_vm._v("List item two")]),_vm._v(" "),_c('li',[_vm._v("List item three")])]),_vm._v(" "),_c('h2',[_vm._v("Ordered list")]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("\n        List item one\n        "),_c('ol',[_c('li',[_vm._v("Nested list item")])])]),_vm._v(" "),_c('li',[_vm._v("List item two")]),_vm._v(" "),_c('li',[_vm._v("List item three")])]),_vm._v(" "),_c('h2',[_vm._v("Definition List")]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("Definition Title One")]),_vm._v(" "),_c('dd',[_vm._v("First definition description")]),_vm._v(" "),_c('dt',[_vm._v("Definition Title Two")]),_vm._v(" "),_c('dd',[_vm._v("Second definition description")])]),_vm._v(" "),_c('h1',[_vm._v("Tables")]),_vm._v(" "),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Head 1")]),_vm._v(" "),_c('th',[_vm._v("Head 2")]),_vm._v(" "),_c('th',[_vm._v("Head 3")])])]),_vm._v(" "),_c('tfoot',[_c('tr',[_c('th',[_vm._v("Footer 1")]),_vm._v(" "),_c('th',[_vm._v("Footer 2")]),_vm._v(" "),_c('th',[_vm._v("Footer 3")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("Description 1")]),_vm._v(" "),_c('td',[_vm._v("Description 2")]),_vm._v(" "),_c('td',[_vm._v("Description 3")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Description 1")]),_vm._v(" "),_c('td',[_vm._v("Description 2")]),_vm._v(" "),_c('td',[_vm._v("Description 3")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Description 1")]),_vm._v(" "),_c('td',[_vm._v("Description 2")]),_vm._v(" "),_c('td',[_vm._v("Description 3")])])])]),_vm._v(" "),_c('h1',[_vm._v("Forms")]),_vm._v(" "),_c('form',[_c('label',{attrs:{"for":"text"}},[_vm._v("Text Input")]),_vm._v(" "),_c('input',{attrs:{"id":"text","type":"text","placeholder":"Text Input"}}),_vm._v(" "),_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{attrs:{"id":"password","type":"password","placeholder":"Password"}}),_vm._v(" "),_c('label',{attrs:{"for":"url"}},[_vm._v("URL")]),_vm._v(" "),_c('input',{attrs:{"id":"url","type":"url","placeholder":"http://www.example.com"}}),_vm._v(" "),_c('label',{attrs:{"for":"email"}},[_vm._v("Email Address")]),_vm._v(" "),_c('input',{attrs:{"id":"email","type":"email","placeholder":"email@example.com"}}),_vm._v(" "),_c('label',{attrs:{"for":"phone"}},[_vm._v("Phone Number")]),_vm._v(" "),_c('input',{attrs:{"id":"phone","type":"tel","placeholder":"123-123-1234"}}),_vm._v(" "),_c('label',{attrs:{"for":"search"}},[_vm._v("Search")]),_vm._v(" "),_c('input',{attrs:{"id":"search","type":"search","placeholder":"Search"}}),_vm._v(" "),_c('label',{attrs:{"for":"number"}},[_vm._v("Number")]),_vm._v(" "),_c('input',{attrs:{"id":"number","type":"number","placeholder":"Number"}}),_vm._v(" "),_c('label',{attrs:{"for":"select"}},[_vm._v("Select")]),_vm._v(" "),_c('select',{attrs:{"id":"select"}},[_c('option',[_vm._v("Option One")]),_vm._v(" "),_c('option',[_vm._v("Option Two")]),_vm._v(" "),_c('option',[_vm._v("Option Three")])]),_vm._v(" "),_c('label',{attrs:{"for":"checkbox1"}},[_c('input',{attrs:{"id":"checkbox1","name":"checkbox","type":"checkbox","checked":"checked"}}),_vm._v(" Choice A\n      ")]),_vm._v(" "),_c('label',{attrs:{"for":"checkbox2"}},[_c('input',{attrs:{"id":"checkbox2","name":"checkbox","type":"checkbox"}}),_vm._v(" Choice B\n      ")]),_vm._v(" "),_c('label',{attrs:{"for":"radio1"}},[_c('input',{staticClass:"radio",attrs:{"id":"radio1","name":"radio","type":"radio","checked":"checked"}}),_vm._v(" Option 1\n      ")]),_vm._v(" "),_c('label',{attrs:{"for":"radio2"}},[_c('input',{staticClass:"radio",attrs:{"id":"radio2","name":"radio","type":"radio"}}),_vm._v(" Option 2\n      ")]),_vm._v(" "),_c('label',{attrs:{"for":"textarea"}},[_vm._v("Textarea")]),_vm._v(" "),_c('textarea',{attrs:{"id":"textarea","rows":"5","cols":"30","placeholder":"Message"}}),_vm._v(" "),_c('input',{attrs:{"type":"button","value":"Button"}}),_vm._v(" "),_c('input',{attrs:{"type":"submit","value":"Submit"}}),_vm._v(" "),_c('input',{attrs:{"type":"reset","value":"Reset"}}),_vm._v(" "),_c('button',[_vm._v("Button element")])]),_vm._v(" "),_c('h2',[_vm._v("Fieldset and Legend")]),_vm._v(" "),_c('form',[_c('fieldset',[_c('legend',[_vm._v("Legend")]),_vm._v(" "),_c('label',{attrs:{"for":"text"}},[_vm._v("Text Input")]),_vm._v(" "),_c('input',{attrs:{"id":"text","type":"text","placeholder":"Text Input"}}),_vm._v(" "),_c('input',{attrs:{"type":"submit","value":"Submit"}})])])])])}];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    {},
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var index = {
  install: function install(Vue) {
    Vue.component('HtmlTestPage', component);
  }
};

module.exports = index;
