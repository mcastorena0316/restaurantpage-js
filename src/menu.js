function displayMenu() {
  const menu = document.createElement('div');
  menu.innerHTML = `<div class="menu-info image" id="menu-info">
                    </div>`;
  menu.className = 'menu-section';
  return menu;
}

export default displayMenu;