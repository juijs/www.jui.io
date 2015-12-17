<section id="api_method">
	<h2>Methods</h2>
	<p>
		<table id="method" width="100%" class="table_s" cellpadding="0" cellspacing="0"></table>
	</p>
</section>

<section id="api_opt">
	<h2>Options</h2>
	<p>
		UI 컴포넌트에서 제공하는 옵션입니다.
		
		<table id="opt" width="100%" class="table_s" cellpadding="0" cellspacing="0"></table>
	</p>
</section>

<section id="api_event">
	<h2>Events</h2>
	<p>
		UI 컴포넌트에서 발생하는 커스텀 이벤트입니다.
		
		<table id="event" width="100%" class="table_s" cellpadding="0" cellspacing="0"></table>
	</p>
</section>

<section id="api_tpl">
	<h2>Templates</h2>
	<p>
		UI 컴포넌트에서 사용하는 템플릿입니다.
		
		<table id="tpl" width="100%" class="table_s" cellpadding="0" cellspacing="0">
		</table>
	</p>
</section>

<section id="api_prop">
	<h2>Properties</h2>
	<p>
		<table id="prop" width="100%" class="table_s" cellpadding="0" cellspacing="0"></table>
	</p>
</section>

<script id="tpl_1" type="text/template">
	<tr>
		<td width="120px">Name</td>
		<td width="120px">Type</td>
		<td>Description</td>
	</tr>
	<! for(var key in items) { !>
	<tr>
		<td><!= items[key].name !></td>
		<td><!= (items[key] && typeof(items[key].type) == "string") ? items[key].type : "" !></td>
		<td><!= (items[key] && typeof(items[key].detail) == "string") ? items[key].detail : "" !></td>
	</tr>
	<! } !>
</script>

<script id="tpl_2" type="text/template">
	<tr>
		<td width="120px">Name</td>
		<td>Description</td>
	</tr>
	<! for(var key in items) { !>
	<tr>
		<td><!= items[key].name !></td>
		<td><!= (items[key] && typeof(items[key].detail) == "string") ? items[key].detail : "" !></td>
	</tr>
	<! } !>
</script>

<script id="tpl_3" type="text/template">
	<tr>
		<td width="120px">Name</td>
		<td width="160px">Parameter</td>
		<td width="80px">Return</td>
		<td>Description</td>
	</tr>
	<! for(var key in items) { !>
	<tr>
		<td><!= items[key].name !></td>
		<td><!= (items[key] && typeof(items[key].param) == "string") ? items[key].param : "" !></td>
		<td><!= (items[key] && typeof(items[key].ret) == "string") ? items[key].ret : "" !></td>
		<td><!= (items[key] && typeof(items[key].detail) == "string") ? items[key].detail : "" !></td>
	</tr>
	<! } !>
</script>

<script id="tpl_4" type="text/template">
	<tr>
		<td width="120px">Name</td>
		<td width="100px">Default</td>
		<td>Description</td>
	</tr>
	<! for(var key in items) { !>
	<tr>
		<td><!= items[key].name !></td>
		<td><!= (items[key] && typeof(items[key].def) != undefined) ? items[key].def : "" !></td>
		<td><!= (items[key] && typeof(items[key].detail) == "string") ? items[key].detail : "" !></td>
	</tr>
	<! } !>
</script>