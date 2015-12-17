jui.ready([ "uix.tree" ], function(tree) {
    tree_3 = tree("#tree_3", {
        root: { title: "C:\\" },
        drag: true,
        dragChild: false
    });

    tree_3.append({ title: "Windows" });
    tree_3.append({ title: "Download" });
    tree_3.append({ title: "Program Files" });
    tree_3.append({ title: "Apache" });
    tree_3.append("0", { title: "run.exe" });
    tree_3.append("0", { title: "setting.conf" });
    tree_3.append("1", { title: "jui.torrrent" });
    tree_3.insert("2.0", { title: "Riot Games" });
    tree_3.insert("2.0.0", { title: "lol.exe" });
    tree_3.append("3", { title: "startup.bat" });
    tree_3.fold("0");
    tree_3.fold("1");
    tree_3.fold("3");
});