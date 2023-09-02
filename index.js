// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Class for Menu
class Menu {
    constructor() {
      this.items = [];
    }
  
    // Function to add an item to the menu
    addItem(item) {
      this.items.push(item);
      alert(`${item.name} has been added to the menu.`);
    }
  
    // Function to view the menu
    viewMenu() {
      if (this.items.length === 0) {
        alert('The menu is currently empty.');
      } else {
        let menuList = 'Menu Items:\n';
        for (let i = 0; i < this.items.length; i++) {
          menuList += `${i + 1}. ${this.items[i].name}\n`;
        }
        alert(menuList);
      }
    }
  
    // Function to remove something from the menu
    deleteItem(index) {
      if (index >= 0 && index < this.items.length) {
        const deletedItem = this.items.splice(index, 1)[0];
        alert(`${deletedItem.name} has been removed from the menu.`);
      } else {
        alert('Invalid index. Please select a valid menu item to delete.');
      }
    }
  }
  
  // Class for Menu Item
  class MenuItem {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Make a new menu
  const menu = new Menu();
  
  // Function to show all the menus options
  function showMainMenu() {
    const choice = prompt(
      'Menu App - Select an option:\n1. Add Item\n2. View Menu\n3. Delete Item\n4. Exit'
    );
  
    switch (choice) {
      case '1':
        const itemName = prompt('Enter the name of the item:');
        const newItem = new MenuItem(itemName);
        menu.addItem(newItem);
        break;
      case '2':
        menu.viewMenu();
        break;
      case '3':
        const deleteIndex = parseInt(prompt('Enter the index of the item to delete:'));
        menu.deleteItem(deleteIndex - 1); // Adjust for 1-based indexing
        break;
      case '4':
        alert('Thank you for using the Menu App. Goodbye!');
        return;  // Leave the menu app
      default:
        alert('Invalid choice. Please select a valid option.');
    }
  
    // Keeps the main menu on the screen until the user chooses to finish 
    showMainMenu();
  }
  
  // Start the menu app
  showMainMenu();