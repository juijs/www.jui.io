jui.ready([ "uix.tree" ], function(tree) {
    tree_2 = tree("#tree_2", {
        root: { title: "C:\\" },
        event: {
            select: function(node) {
                this.select(node.index);
                alert("index(" + node.index + "), title(" + node.data.title + ")");
            }
        }
    });

    tree_2.append({ title: "Windows" });
    tree_2.append({ title: "Download" });
    tree_2.append({ title: "Program Files" });
    tree_2.append({ title: "Apache" });
    tree_2.append("0", { title: "run.exe" });
    tree_2.append("0", { title: "setting.conf" });
    tree_2.append("1", { title: "jui.torrrent" });
    tree_2.insert("2.0", { title: "Riot Games" });
    tree_2.insert("2.0.0", { title: "lol.exe" });
    tree_2.append("3", { title: "startup.bat" });
    tree_2.fold("0");
    tree_2.fold("1");
    tree_2.fold("3");
});