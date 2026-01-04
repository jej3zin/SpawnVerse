document.addEventListener('DOMContentLoaded', async () => {
  /* ================= ELEMENTOS ================= */
  const openHeadDrop = document.getElementById('openHeadDrop');
  const headDropdown = document.getElementById('dropdownuser');
  // const avatarImg = openHeadDrop?.querySelector('img');

  // const loginBtn = document.getElementById('loginBtn');
  // const logoutBtn = document.getElementById('logoutBtn');
  // const viewsBtn = document.getElementById('viewsBtn');

  // const hiUser = document.getElementById('hiUser');

  if (!openHeadDrop || !headDropdown) return;

  /* ================= DROPDOWN ================= */
  openHeadDrop.addEventListener('click', (e) => {
    e.stopPropagation();
    headDropdown.classList.toggle('showDropdown');
  });

  document.addEventListener('click', (e) => {
    if (!headDropdown.contains(e.target)) {
      headDropdown.classList.remove('showDropdown');
    }
  });

  /* ===== ESC ===== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headDropdown.classList.remove('showDropdown');
    }
  });
});
