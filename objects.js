var playlist = {
  'Alison': 'My Bloody Valentine', 'Phil Ochs': 'Here\'s to The State of Mississippi'
}


function updatePlayList(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

/*
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
*/
function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName]
  return playlist
}
