export const registerLanguage = (Prism) => {
    // Copied from https://raw.githubusercontent.com/PrismJS/prism/master/components/prism-ruby.js
    (function (Prism) {
        Prism.languages.ruby = Prism.languages.extend("clike", {
            comment: [
                /#.*/,
                {
                    pattern: /^=begin\s[\s\S]*?^=end/m,
                    greedy: true,
                },
            ],
            "class-name": {
                pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
                lookbehind: true,
                inside: {
                    punctuation: /[.\\]/,
                },
            },
            keyword:
                /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        });

        var interpolation = {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "tag",
                },
                rest: Prism.languages.ruby,
            },
        };

        delete Prism.languages.ruby.function;

        Prism.languages.insertBefore("ruby", "keyword", {
            regex: [
                {
                    pattern: RegExp(
                        /%r/.source +
                            "(?:" +
                            [
                                /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                                /\((?:[^()\\]|\\[\s\S])*\)/.source,
                                // Here we need to specifically allow interpolation
                                /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source,
                                /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source,
                                /<(?:[^<>\\]|\\[\s\S])*>/.source,
                            ].join("|") +
                            ")" +
                            /[egimnosux]{0,6}/.source
                    ),
                    greedy: true,
                    inside: {
                        interpolation: interpolation,
                    },
                },
                {
                    pattern:
                        /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                    lookbehind: true,
                    greedy: true,
                    inside: {
                        interpolation: interpolation,
                    },
                },
            ],
            variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
            symbol: {
                pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
                lookbehind: true,
            },
            "method-definition": {
                pattern: /(\bdef\s+)[\w.]+/,
                lookbehind: true,
                inside: {
                    function: /\w+$/,
                    rest: Prism.languages.ruby,
                },
            },
        });

        Prism.languages.insertBefore("ruby", "number", {
            builtin:
                /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
            constant: /\b[A-Z]\w*(?:[?!]|\b)/,
        });

        Prism.languages.ruby.string = [
            {
                pattern: RegExp(
                    /%[qQiIwWxs]?/.source +
                        "(?:" +
                        [
                            /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                            /\((?:[^()\\]|\\[\s\S])*\)/.source,
                            // Here we need to specifically allow interpolation
                            /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source,
                            /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source,
                            /<(?:[^<>\\]|\\[\s\S])*>/.source,
                        ].join("|") +
                        ")"
                ),
                greedy: true,
                inside: {
                    interpolation: interpolation,
                },
            },
            {
                pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                greedy: true,
                inside: {
                    interpolation: interpolation,
                },
            },
            {
                pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                alias: "heredoc-string",
                greedy: true,
                inside: {
                    delimiter: {
                        pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<[-~]?/,
                        },
                    },
                    interpolation: interpolation,
                },
            },
            {
                pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                alias: "heredoc-string",
                greedy: true,
                inside: {
                    delimiter: {
                        pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<[-~]?'|'$/,
                        },
                    },
                },
            },
        ];

        Prism.languages.rb = Prism.languages.ruby;
    })(Prism);
};
