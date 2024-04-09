
  // Function to calculate total cost
  function calculateTotal() {
    // Get values from input fields
    var petrolCost = parseFloat(document.getElementById("petrolCost").value);
    var litersPurchased = parseFloat(document.getElementById("litersPurchased").value);
    
    // Calculate total cost
    var totalCost = petrolCost * litersPurchased;
    
    // Display total cost
    document.getElementById("totalCost").textContent = "Total Cost: AED" + totalCost.toFixed(2);
  }