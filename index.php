<?php

//Key:
//ea885f49f888d1d7f649529b3635f400

//Secret:
//374fbb9ea2d45d04

$tag = 'shoes';
//Was going to use php originally, thought it would be better off to use mostly javascript/jquery. I've left this in to show where i first began.



$url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8013632754e388f1c44febeea33afa2d&tags='.$tag.'&format=json&nojsoncallback=1';
//The above url works somewhat, it seems like it expires after a certain amount of time.



$data = json_decode(file_get_contents($url));

$photos = $data->photos->photo;


foreach ($photos as $photo) {
    
    $url = 'http://farm'.$photo->farm.'.staticflickr.com/'.$photo->server.'/'.$photo->id.'_'.$photo->secret.'.jpg';
    echo '<img src="'.$url.'">';
    echo '<h1>'.$photo->title.'</h1>';
        
}?>

<html>
<head>
<link rel="stylesheet" href="./Styles/style.css">    
<script>
    
    
</script>
    
</head>
<body>
<input type="text" size="30" onkeyup="showResult(this.value)">
<div id="livesearch"></div>
    
    
</body>



</html>