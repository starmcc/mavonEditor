webpackJsonpmavon_editor([103],{370:function(e,a){e.exports=function(e){var a="action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view",n={illegal:/\}\}/,begin:/[a-zA-Z0-9_]+=/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/[a-zA-Z0-9_]+/}]},t=(e.QUOTE_STRING_MODE,{endsWithParent:!0,relevance:0,keywords:{keyword:"as",built_in:a},contains:[e.QUOTE_STRING_MODE,n,e.NUMBER_MODE]});return{case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT("{{!(--)?","(--)?}}"),{className:"template-tag",begin:/\{\{[#\/]/,end:/\}\}/,contains:[{className:"name",begin:/[a-zA-Z\.\-]+/,keywords:{"builtin-name":a},starts:t}]},{className:"template-variable",begin:/\{\{[a-zA-Z][a-zA-Z\-]+/,end:/\}\}/,keywords:{keyword:"as",built_in:a},contains:[e.QUOTE_STRING_MODE]}]}}}});