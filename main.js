(function(){
  var player = document.body.getElementsByTagName('video')[0];
  var canvas = document.createElement('canvas');
  var link = document.createElement('a');
  link.download = `screenshot_${new Date().getTime()}`;
  canvas.width = player.videoWidth;
  canvas.height = player.videoHeight;
  canvas.getContext('2d').drawImage(player,0,0,canvas.width,canvas.height);
  canvas.toBlob(function (blob) {
    link.href = URL.createObjectURL(blob);
    link.click();
  },'image/png');
})();
