jui.ready([ "uix.tree" ], function(tree) {
    tree_1 = tree("#tree_1 .tree", {
        root: { title: "C:\\" },
        event: {
            select: function(node) {
                this.select(node.index);
                alert("index(" + node.index + "), title(" + node.data.title + ")");
            }
        },
        tpl: {
            node: $("#tpl_node").html()
        }
    });

    for(var i = 0; i < tree_1.length; i++) {
        tree_1[i].append({ title: "Windows" });
        tree_1[i].append({ title: "Download" });
        tree_1[i].append({ title: "Program Files" });
        tree_1[i].append({ title: "Apache" });
        tree_1[i].append("0", { title: "run.exe" });
        tree_1[i].append("0", { title: "setting.conf" });
        tree_1[i].append("1", { title: "jui.torrrent" });
        tree_1[i].insert("2.0", { title: "Riot Games" });
        tree_1[i].insert("2.0.0", { title: "lol.exe" });
        tree_1[i].append("3", { title: "startup.bat" });
        tree_1[i].fold("0");
        tree_1[i].fold("1");
        tree_1[i].fold("3");
    }
});