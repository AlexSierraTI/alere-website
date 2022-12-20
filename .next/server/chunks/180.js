exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 8180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ page_factory)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./presentation/shared/main-layout.module.scss
var main_layout_module = __webpack_require__(7592);
var main_layout_module_default = /*#__PURE__*/__webpack_require__.n(main_layout_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./presentation/shared/main-layout.tsx








const {
  Header,
  Footer,
  Sider,
  Content
} = external_antd_.Layout;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type
  };
};

const items = [getItem('Alere Play', 'menuAlerePlay', null, [getItem('Início', 'alere-play', /*#__PURE__*/jsx_runtime_.jsx(icons_.HomeOutlined, {})), getItem('Catálogo', 'alere-play/catalogo', /*#__PURE__*/jsx_runtime_.jsx(icons_.BookOutlined, {}), [getItem('Livro digital - EI - 3 Anos', '1'), getItem('Livro digital - EI - 4 Anos', '2'), getItem('Livro digital - EI - 5 Anos', '3'), getItem('Livro digital - EF - 1° Ano - Linguagem', '4'), getItem('Livro digital - EF - 1° Ano - Matemática', '5'), getItem('Livro digital - EF - 2° Ano - Linguagem', '6'), getItem('Livro digital - EF - 2° Ano - Matemática', '7'), getItem('Livro digital - EF - 3° Ano - Linguagem', '8'), getItem('Livro digital - EF - 3° Ano - Matemática', '9'), getItem('Livro digital - EF - 4° Ano - Linguagem', '10'), getItem('Livro digital - EF - 4° Ano - Matemática', '11'), getItem('Livro digital - EF - 5° Ano - Linguagem', '12'), getItem('Livro digital - EF - 5° Ano - Matemática', '13')])], 'group'), getItem('Revisão dos Saberes', 'menuRevisaoDosSaberes', null, [getItem('Início', 'revisao-dos-saberes', /*#__PURE__*/jsx_runtime_.jsx(icons_.HomeOutlined, {})), getItem('Livro do Estudante', 'revisao-dos-saberes/livro-do-estudante', /*#__PURE__*/jsx_runtime_.jsx(icons_.BookOutlined, {})), getItem('Manual do Professor', 'revisao-dos-saberes/manual-do-professor', /*#__PURE__*/jsx_runtime_.jsx(icons_.BookOutlined, {})), getItem('Proposta Pedagógica', 'revisao-dos-saberes/proposta-pedagogica', /*#__PURE__*/jsx_runtime_.jsx(icons_.ReconciliationOutlined, {}))], 'group'), getItem('Contatos', 'menuContato', null, [getItem('Contato', 'contatos/contato', /*#__PURE__*/jsx_runtime_.jsx(icons_.ContactsOutlined, {})), getItem('Desenvolvedores', 'contatos/desenvolvedor', /*#__PURE__*/jsx_runtime_.jsx(icons_.DatabaseOutlined, {}))], 'group'), getItem('Política', 'menuPolitica', null, [getItem('Política de Privacidade', 'privacidade', /*#__PURE__*/jsx_runtime_.jsx(icons_.ContactsOutlined, {}))], 'group')];

const MainLayout = ({
  page
}) => {
  const router = (0,router_.useRouter)();

  const onClick = e => {
    if (e.keyPath && e.keyPath.length == 2) {
      router.push(`/${e.keyPath[1]}?livro=${e.keyPath[0]}`);
    } else {
      router.push(`/${e.key}`);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
    className: (main_layout_module_default()).layout,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sider, {
      className: (main_layout_module_default()).sider,
      width: 250,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        xl: 24,
        md: 24,
        sm: 24,
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: '/',
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            justify: "center",
            align: "middle",
            className: (main_layout_module_default()).logo,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Image, {
              width: 200,
              src: "/assets/logo.png",
              preview: false
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          justify: "center",
          align: "middle",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
            onClick: onClick,
            defaultSelectedKeys: ['1'],
            defaultOpenKeys: ['sub1'],
            mode: "vertical",
            items: items
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
      className: (main_layout_module_default()).layout,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        className: (main_layout_module_default()).header,
        children: "Alere Editora"
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        className: (main_layout_module_default()).content,
        children: page
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          xl: 24,
          md: 24,
          sm: 24,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            justify: "start",
            align: "top",
            gutter: [5, 20],
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EnvironmentOutlined, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: "Rua Boa Esperan\xE7a, N 122 - Ch\xE1cara Santo Antonio - CEP - 03408-000"
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const main_layout = (MainLayout);
;// CONCATENATED MODULE: ./presentation/shared/page-factory.tsx







const BasePage = ({
  contentPage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: 'Alere Website'
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: 'Alere Website'
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "Alexandre"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(main_layout, {
      page: contentPage
    })]
  });
};

/* harmony default export */ const page_factory = (BasePage);

/***/ }),

/***/ 7592:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-layout_header__3getv",
	"logo": "main-layout_logo__YmbMo",
	"layout": "main-layout_layout__67UUm",
	"sider": "main-layout_sider__Pd7aK",
	"content": "main-layout_content__6GqTo"
};


/***/ })

};
;