<?php
	$page = $_GET["p"];
	$contents = file_get_contents("menu.json");
	$contents = utf8_encode($contents);
	$json = json_decode($contents);

	$group = $json->group;
	$list = $json->list;
?>

<div class="vmenu rect">
<?php for ($i = 0; $i < sizeof($group); $i++) { ?>
	<a class="chart-<?php echo $group[$i]->type ?>"><?php echo $group[$i]->title ?></a>
	<ul class="submenu">
		<?php for ($j = 0; $j < sizeof($list); $j++) { ?>
			<?php if($group[$i]->type == $list[$j]->type) { ?>
				<?php if($page == $list[$j]->code) { ?>
				<li class="active">
				<?php } else { ?>
				<li>
				<?php } ?>
					<a href="?p=<?php echo $list[$j]->code ?>"><?php echo $list[$j]->title ?></a>
				</li>
			<?php } ?>
		<?php } ?>
	</ul>
<?php } ?>
</div>
