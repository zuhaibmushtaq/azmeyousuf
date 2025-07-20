function createNavigation() {
    const navHTML = `
        <nav class="bg-green-600 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center text-white text-2xl font-bold">
                    <img src="/Users/zuhaibmushtaq-workspan/Desktop/YVG Website/Images/logo.jpeg" alt="Logo" class="h-10 w-20 mr-3 rounded-full">
                    Azm -e- Yousuf Volunteers
                </div>
                <div class="space-x-4">
                    <a href="index-html.html" class="text-white hover:text-blue-200">Home</a>
                    <a href="gallery-html.html" class="text-white hover:text-blue-200">Gallery</a>
                    <a href="about-html.html" class="text-white hover:text-blue-200">About</a>
                    <a href="feedback-html.html" class="text-white hover:text-blue-200">Feedback</a>
                </div>
            </div>
        </nav>
    `;
    
    document.getElementById('nav-container').innerHTML = navHTML;
}