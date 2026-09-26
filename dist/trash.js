// ========================
// EDIT TRASH CONTENT HERE
// Keep the one folder, or change its name and note.
// ========================
her.trashFolder = {
  name:'photos_you_want_deleted',
  extension:'folder',
  note:'A suspiciously specific folder. I have been informed these need to go.'
};

function showTrash(){
  win('Trash', `<section class="minimal-trash"><header><span>TRASH</span><small>1 item</small></header><button class="trash-folder" onclick="openDeletedPhotos()"><div class="folder-icon">▰</div><div><strong>${her.trashFolder.name}</strong><span>${her.trashFolder.extension} · 11 items</span></div><b>›</b></button><p class="trash-note">${her.trashFolder.note}</p></section>`);
}
function openDeletedPhotos(){
  win('photos_you_want_deleted', `<section class="deleted-photos"><header><button class="trash-back" onclick="showTrash()">← back</button><span>11 photos marked for deletion</span></header><div class="deleted-grid">${Array.from({length:11},(_,i)=>`<img src="trash-photos/trash-${String(i+1).padStart(2,'0')}.jpeg" loading="lazy" alt="Photo marked for deletion ${i+1}">`).join('')}</div><footer>Deletion request received.<br><strong>Request politely ignored.</strong></footer></section>`,'wide');
}
