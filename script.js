const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = 'Light Mode';
} 
else 
{
    toggleButton.textContent = 'Dark Mode';
}

// Toggleeeee
toggleButton.addEventListener('click', () => 
{
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) 
    {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Light Mode';
    } 
    
    else 
    {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Dark Mode';
    }
});