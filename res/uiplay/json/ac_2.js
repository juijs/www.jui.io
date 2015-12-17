jui.ready([ "uix.autocomplete" ], function(autocomplete) {
    ac_2 = autocomplete("#ac_2", {
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
            "Erlang"
        ],
        event: {
            change: function(text) {
                alert(text);
            }
        }
    });

    ac_2_submit = function() {
        ac_2.update([
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
        ]);
    }
});