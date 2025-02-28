document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "https://homyhut-houserent-backend.onrender.com/api/rent/rent-ads/";
  const listingContainer = document.querySelector(".grid");

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      listingContainer.innerHTML = ""; // Clear existing content

      data.forEach(ad => {
          const adCard = document.createElement("div");
          adCard.className = "card shadow-lg p-4 transition-transform duration-300 hover:scale-105 border border-gray-200 rounded-lg";

          // Use backticks for template literals
          adCard.innerHTML = `
              <img src="${ad.image || 'House-img/default.jpg'}" alt="${ad.title}" class="w-full h-48 object-cover rounded">
              <div class="p-4">
                  <h2 class="text-xl font-semibold">${ad.title}</h2>
                  <p class="text-gray-500">Category: ${ad.category || 'N/A'}</p>
                  <p class="text-gray-600 mt-1">Location: ${ad.location || 'Unknown'}</p>
                  <p class="text-lg font-bold mt-2">$${ad.price || 'N/A'}/month</p>
                  <p class="${ad.is_available ? 'text-green-500' : 'text-red-500'} font-semibold">
                      ${ad.is_available ? 'Available' : 'Not Available'}
                  </p>
                  <div class="mt-4 flex gap-2">
                      <a href="details.html?id=${ad.id}"><button class="btn btn-outline btn-primary">View Details</button></a>
                      <button class="btn btn-primary">Request Rent</button>
                  </div>
              </div>
          `;

          listingContainer.appendChild(adCard);
      });
  } catch (error) {
      console.error("Error fetching rental ads:", error);
      listingContainer.innerHTML = "<p class='text-red-500'>Failed to load rental listings.</p>";
  }
});

// Details Post
