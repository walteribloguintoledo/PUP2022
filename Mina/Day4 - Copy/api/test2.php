<html>
<body>
<form method="POST">
enter your text :<input type="text" name="input_value"><br>
<input type="submit" value="submit">
</form>
</body>
</html>
<?php
$a=$_POST["input_value"];
echo "--->";
echo $a ;
?>