<?php
	session_start();

	$page = (isset($_GET["p"])) ? $_GET["p"] : null;
	$contents = file_get_contents("menu.json");
	$contents = utf8_encode($contents);
	$json = json_decode($contents);

	$group = $json->group;
	$list = $json->list;

	$data = $list[0];
	$dataIndex = 0;
?>

<div class="vmenu rect">
<?php for ($i = 0; $i < sizeof($group); $i++) { ?>
	<a data-type="<?php echo $group[$i]->type ?>"><?php echo $group[$i]->title ?></a>
	<ul class="submenu">
		<?php for ($j = 0; $j < sizeof($list); $j++) {
			$hide = isset($list[$j]->hide) ? $list[$j]->hide : false;
		?>
			<?php if($group[$i]->type == $list[$j]->type && $hide == false) { ?>
				<?php if($page == $list[$j]->code) {
					$data = $list[$j];
					$dataIndex = $j;
				?>
				<li class="active" data-parent="<?php echo $data->type ?>">
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
