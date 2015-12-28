jui.ready([ "uix.autocomplete" ], function(autocomplete) {
    ac_1 = autocomplete("#ac_1", {
        target: "input[type=text]",
        words: [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ],
        event: {
            change: function(text) {
                alert(text);
            }
        }
    });
});