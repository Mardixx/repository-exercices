let currentHealth = 100; // Valeur de la vie initiale (100%)
let tanjiroHP = 10;
// Fonction pour mettre à jour la barre de vie
function updateHealthBar(healthPercentage) {
  const healthBar = document.querySelector(".health");
  healthBar.style.width = `${healthPercentage}%`;
}

// Fonction pour diminuer la vie
function decreaseHealth() {
  if (currentHealth > 0) {
    tanjiroHP -= 1;
    currentHealth -= 1; // Diminuer la vie de 10% (vous pouvez ajuster cette valeur)
    updateHealthBar(currentHealth);
    console.log(tanjiroHP);
  }
}
