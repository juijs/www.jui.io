jui.define("drawing.core", [], function () {
	var DrawingCore = function () {

		this.disabled = true;

		// mode 가 변경될 때 초기 상태로 되돌린다.
		this.initMode = function () {

		}


		this.append  = function (parent, child) {
			parent.append(child)
			parent.element.appendChild(child.element);
		}

		this.remove = function (child) {
			child.remove();
			child.element.parentNode.removeChild(child.element);
		}

		this.setDisabled = function (value) {
			this.disabled = value;

			this.initMode();
		}

		this.getDisabled = function () {
			return !!this.disabled;
		}

	};


	return DrawingCore;
});
