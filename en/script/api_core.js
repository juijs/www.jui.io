window.coreApi = {
    prop: {
        selector: {
            detail: "Selector string when creating a UI."
        },
        root: {
            detail: "Target element of a UI."
        },
        options: {
            detail: "Option when a UI is created."
        },
        tpl: {
            detail: "List of template functions used by athe UI."
        },
        event: {
            detail: "List of custom events defined in a UI."
        },
        listen: {
            detail: "List of DOM events defined in a UI."
        },
        timestamp: {
            detail: "Time stamp value when creating a UI."
        },
        index: {
        	detail: "Index value for each UI if an UI object is an arrangement."
        },
        module: {
            detail: "An object which shows the creator and type of a UI."
        },
        parent: {
            detail: "Property which can refer to the parent object."
        }
    },
    method: {
        emit: {
            param: "eventType, sendObject",
            ret: "none",
            detail: "Generates a custom event. The first parameter is the type of a custom event. A function defined as an option or on method is called."
        },
        on: {
            param: "eventType, callback",
            ret: "none",
            detail: "A callback function defined as an on method is run when an emit method is called."
        },
        off: {
            param: "eventType | callback",
            ret: "none",
            detail: "Removes a custom event of an applicable type or callback handler."
        },
        addEvent: {
            param: "selector, domEventType, callback",
            ret: "none",
            detail: "Defines a browser event of a DOM element."
        },
        addTrigger: {
        	param: "selector, domEventType",
        	ret: "none",
        	detail: "Generates an applicable event to a DOM element."
        },
        addValid: {
            param: "methodName, typeList",
            ret: "none",
            detail: "Check the parameter type of a UI method and generates an alarm when a wrong value is entered."
        },
        callBefore: {
        	param: "methodName, callback",
        	ret: "none | object",
        	detail: "Sets a callback function that is called before a UI method is run."
        },
        callAfter: {
        	param: "methodName, callback",
        	ret: "none | object",
        	detail: "Sets a callback function that is called after a UI method is run."
        },
        callDelay: {
        	param: "methodName, callObj",
        	ret: "none",
        	detail: "Sets a callback function and the delay time before/after a UI method is run."
        },
        setTpl: {
            param: "tplName, tplHtml",
            ret: "none",
            detail: "Dynamically defines the template method of a UI."
        },
        setVo: {
            param: "none",
            ret: "none",
            detail: "Applies jBinder, which is a binding library to a UI."
        },
        setOption: {
            param: "object | optionName, optionValue",
            ret: "none",
            detail: "Dynamically defines the options of a UI"
        },
        destroy: {
            param: "none",
            ret: "none",
            detail: "Removes all events set in a UI obejct and the DOM element."
        },
        find: {
            param: "selector",
            ret: "object",
            detail: "Get the child element of the root element."
        },
        super: {
            param: "methodName, arguments",
            ret: "object",
            detail: "Call the methods of the parent class."
        }
    },
    opt: {
        event: {
            detail: "Defines a DOM event to be used in a UI."
        },
        tpl: {
            detail: "Defines a template markup to be used in a UI."
        },
        animate: {
        	detail: "Determines whether to use the amination effect of a UI."
        },
        vo: {
            detail: "Configures a binding object of a markup. (@Deprecated)"
        }
    },
    grid: {
        type: {
            detail: "Specifies the type of a grid to be added."
        },
        extend: {
            detail: "Configures the index of an applicable grid group when intending to use already configured grid options."
        },
        dist: {
            detail: "Able to change the locatn of an axis."
        },
        orient: {
            detail: "Specifies the direction in which an axis is shown (top, bottom, left or right)."
        },
        hide: {
            detail: "Determines whether to display an applicable axis."
        },
        color: {
            detail: "Specifies the color of an axis."
        },
        title: {
            detail: "Specifies the text shown on an axis."
        },
        line: {
            detail: "Determines whether to display a line on the axis background."
        },
        baseline: {
            detail: "Determines whether to display the base line on the axis background."
        },
        subline: {
            detail: "Determines whether to display a sub line on the axis background."
        },
        format: {
            detail: "Determines whether to format the value on an axis."
        },
        textRotate: {
            detail: "Specifies the slope of text displayed on an axis."
        },
        animate: {
            detail: "Run the animation effect."
        }
    },
    brush: {
        type: {
            detail: "Specifies the type of a brush to be added."
        },
        target: {
            detail: "Specifies the key value of data displayed on a brush."
        },
        colors: {
            detail: "Able to specify color codes according to the target order (basically, refers to the color codes of a theme)"
        },
        axis: {
            detail: "Specifies the index of a grid group which acts as the reference axis of a brush."
        },
        clip: {
            detail: "If the brush is drawn outside of the chart, cut the area."
        },
        index: {
            detail: "[Read Only] Sequence index on which brush is drawn."
        },
        x: {
            detail: "[Read Only] Function to obtain the X coordinate."
        },
        y: {
            detail: "[Read Only] Function to obtain the Y coordinate."
        },
        c: {
            detail: "[Read Only] Function to obtain custom coordinates."
        },
        animate: {
            detail: "Run the animation effect."
        }
    },
    widget: {
        type: {
            detail: "Specifies the type of a widget to be added."
        },
        brush: {
            detail: "Specifies a brush index for which a widget is used."
        },
        render: {
            detail: "Determines whether a widget is to be rendered."
        },
        index: {
            detail: "[Read Only] Index which shows the sequence how a widget is drawn."
        },
        animate: {
            detail: "Run the animation effect."
        }
    }
};
