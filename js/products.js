// Product Data
const products = [
    // Moisturizers
    {
        id: 1,
        name: "CeraVe Moisturizing Cream",
        category: "moisturizer",
        price: 16.99,
        priceRange: "budget",
        skinTypes: ["dry", "normal", "sensitive"],
        description: "Daily face and body moisturizer with hyaluronic acid",
        buyLink: "https://www.amazon.com/s?k=cerave+moisturizing+cream",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Neutrogena Hydro Boost",
        category: "moisturizer",
        price: 18.99,
        priceRange: "budget",
        skinTypes: ["dry", "normal", "combination"],
        description: "Water gel formula with hyaluronic acid",
        buyLink: "https://www.amazon.com/s?k=neutrogena+hydro+boost",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        name: "La Roche-Posay Toleriane",
        category: "moisturizer",
        price: 34.99,
        priceRange: "mid",
        skinTypes: ["sensitive", "dry", "normal"],
        description: "Ultra moisturizer for sensitive skin",
        buyLink: "https://www.amazon.com/s?k=la+roche+posay+toleriane",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Clinique Moisture Surge",
        category: "moisturizer",
        price: 42.00,
        priceRange: "mid",
        skinTypes: ["dry", "combination", "normal"],
        description: "72-hour auto-replenishing hydrator",
        buyLink: "https://www.amazon.com/s?k=clinique+moisture+surge",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop"
    },
    {
        id: 5,
        name: "La Mer Crème de la Mer",
        category: "moisturizer",
        price: 190.00,
        priceRange: "luxury",
        skinTypes: ["dry", "normal", "sensitive"],
        description: "Legendary moisturizing cream",
        buyLink: "https://www.sephora.com/search?keyword=la%20mer",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop"
    },

    // Serums
    {
        id: 6,
        name: "The Ordinary Niacinamide 10% + Zinc 1%",
        category: "serum",
        price: 6.99,
        priceRange: "budget",
        skinTypes: ["oily", "combination", "normal"],
        description: "Reduces appearance of blemishes and congestion",
        buyLink: "https://www.amazon.com/s?k=the+ordinary+niacinamide",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
    },
    {
        id: 7,
        name: "The Ordinary Hyaluronic Acid 2% + B5",
        category: "serum",
        price: 7.99,
        priceRange: "budget",
        skinTypes: ["dry", "normal", "combination", "sensitive"],
        description: "Hydration support formula",
        buyLink: "https://www.amazon.com/s?k=the+ordinary+hyaluronic+acid",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Paula's Choice 2% BHA Liquid Exfoliant",
        category: "serum",
        price: 32.00,
        priceRange: "mid",
        skinTypes: ["oily", "combination", "normal"],
        description: "Gentle exfoliant for blackheads and breakouts",
        buyLink: "https://www.amazon.com/s?k=paulas+choice+bha",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Skinceuticals C E Ferulic",
        category: "serum",
        price: 169.00,
        priceRange: "luxury",
        skinTypes: ["normal", "dry", "combination"],
        description: "Advanced antioxidant serum",
        buyLink: "https://www.dermstore.com/skinceuticals-c-e-ferulic",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Sunday Riley Good Genes",
        category: "serum",
        price: 85.00,
        priceRange: "luxury",
        skinTypes: ["normal", "combination", "oily"],
        description: "Lactic acid treatment",
        buyLink: "https://www.sephora.com/search?keyword=sunday%20riley%20good%20genes",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556228852-80c0c0d309e6?w=400&h=400&fit=crop"
    },

    // Cleansers
    {
        id: 11,
        name: "CeraVe Hydrating Cleanser",
        category: "cleanser",
        price: 12.99,
        priceRange: "budget",
        skinTypes: ["dry", "normal", "sensitive"],
        description: "Gentle non-foaming cleanser",
        buyLink: "https://www.amazon.com/s?k=cerave+hydrating+cleanser",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556228852-80c0c0d309e6?w=400&h=400&fit=crop"
    },
    {
        id: 12,
        name: "La Roche-Posay Toleriane Cleanser",
        category: "cleanser",
        price: 14.99,
        priceRange: "budget",
        skinTypes: ["sensitive", "dry", "normal"],
        description: "Hydrating gentle cleanser",
        buyLink: "https://www.amazon.com/s?k=la+roche+posay+cleanser",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
    },
    {
        id: 13,
        name: "Cetaphil Gentle Skin Cleanser",
        category: "cleanser",
        price: 9.99,
        priceRange: "budget",
        skinTypes: ["sensitive", "dry", "normal", "combination"],
        description: "Gentle cleanser for sensitive skin",
        buyLink: "https://www.amazon.com/s?k=cetaphil+gentle+cleanser",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop"
    },
    {
        id: 14,
        name: "Fresh Soy Face Cleanser",
        category: "cleanser",
        price: 38.00,
        priceRange: "mid",
        skinTypes: ["normal", "dry", "combination", "sensitive"],
        description: "Gel cleanser with rosewater",
        buyLink: "https://www.sephora.com/search?keyword=fresh%20soy%20cleanser",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
    },
    {
        id: 15,
        name: "Tatcha The Rice Wash",
        category: "cleanser",
        price: 38.00,
        priceRange: "mid",
        skinTypes: ["normal", "dry", "sensitive"],
        description: "Soft cream cleanser",
        buyLink: "https://www.sephora.com/search?keyword=tatcha%20rice%20wash",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
    },

    // Sunscreens
    {
        id: 16,
        name: "Neutrogena Ultra Sheer SPF 55",
        category: "sunscreen",
        price: 10.99,
        priceRange: "budget",
        skinTypes: ["normal", "oily", "combination"],
        description: "Lightweight sunscreen lotion",
        buyLink: "https://www.amazon.com/s?k=neutrogena+sunscreen",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&h=400&fit=crop"
    },
    {
        id: 17,
        name: "La Roche-Posay Anthelios SPF 60",
        category: "sunscreen",
        price: 35.99,
        priceRange: "mid",
        skinTypes: ["sensitive", "dry", "normal", "combination"],
        description: "Melt-in sunscreen milk",
        buyLink: "https://www.amazon.com/s?k=la+roche+posay+anthelios",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop"
    },
    {
        id: 18,
        name: "EltaMD UV Clear SPF 46",
        category: "sunscreen",
        price: 39.00,
        priceRange: "mid",
        skinTypes: ["oily", "sensitive", "combination"],
        description: "Oil-free sunscreen",
        buyLink: "https://www.dermstore.com/eltamd-uv-clear",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop"
    },
    {
        id: 19,
        name: "Supergoop! Unseen Sunscreen SPF 40",
        category: "sunscreen",
        price: 36.00,
        priceRange: "mid",
        skinTypes: ["normal", "oily", "combination"],
        description: "Invisible gel sunscreen",
        buyLink: "https://www.sephora.com/search?keyword=supergoop%20unseen",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556228852-80c0c0d309e6?w=400&h=400&fit=crop"
    },
    {
        id: 20,
        name: "Shiseido Urban Environment SPF 42",
        category: "sunscreen",
        price: 42.00,
        priceRange: "mid",
        skinTypes: ["normal", "dry", "combination"],
        description: "Hydrating UV protector",
        buyLink: "https://www.sephora.com/search?keyword=shiseido%20sunscreen",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
    },

    // Face Masks
    {
        id: 21,
        name: "Aztec Secret Indian Healing Clay",
        category: "mask",
        price: 12.99,
        priceRange: "budget",
        skinTypes: ["oily", "combination", "normal"],
        description: "Deep pore cleansing mask",
        buyLink: "https://www.amazon.com/s?k=aztec+clay+mask",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
    },
    {
        id: 22,
        name: "Origins Clear Improvement Mask",
        category: "mask",
        price: 28.00,
        priceRange: "mid",
        skinTypes: ["oily", "combination", "normal"],
        description: "Active charcoal mask",
        buyLink: "https://www.sephora.com/search?keyword=origins%20clear%20improvement",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
    },
    {
        id: 23,
        name: "Glamglow Supermud Mask",
        category: "mask",
        price: 59.00,
        priceRange: "luxury",
        skinTypes: ["oily", "combination"],
        description: "Clearing treatment",
        buyLink: "https://www.sephora.com/search?keyword=glamglow%20supermud",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop"
    },
    {
        id: 24,
        name: "Summer Fridays Jet Lag Mask",
        category: "mask",
        price: 49.00,
        priceRange: "mid",
        skinTypes: ["dry", "normal", "sensitive"],
        description: "Hydrating overnight mask",
        buyLink: "https://www.sephora.com/search?keyword=summer%20fridays%20jet%20lag",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
    },
    {
        id: 25,
        name: "Laneige Water Sleeping Mask",
        category: "mask",
        price: 32.00,
        priceRange: "mid",
        skinTypes: ["dry", "normal", "combination"],
        description: "Overnight hydration mask",
        buyLink: "https://www.sephora.com/search?keyword=laneige%20sleeping%20mask",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
    },

    // Makeup
    {
        id: 26,
        name: "Maybelline Fit Me Foundation",
        category: "makeup",
        price: 7.98,
        priceRange: "budget",
        skinTypes: ["normal", "oily", "combination"],
        description: "Matte + poreless foundation",
        buyLink: "https://www.amazon.com/s?k=maybelline+fit+me",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&h=400&fit=crop"
    },
    {
        id: 27,
        name: "L'Oréal True Match Foundation",
        category: "makeup",
        price: 12.99,
        priceRange: "budget",
        skinTypes: ["normal", "dry", "combination"],
        description: "Super-blendable liquid foundation",
        buyLink: "https://www.amazon.com/s?k=loreal+true+match",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop"
    },
    {
        id: 28,
        name: "NARS Radiant Longwear Foundation",
        category: "makeup",
        price: 50.00,
        priceRange: "luxury",
        skinTypes: ["normal", "dry", "combination"],
        description: "16-hour foundation",
        buyLink: "https://www.sephora.com/search?keyword=nars%20foundation",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop"
    },
    {
        id: 29,
        name: "Estée Lauder Double Wear",
        category: "makeup",
        price: 52.00,
        priceRange: "luxury",
        skinTypes: ["normal", "oily", "combination"],
        description: "Stay-in-place makeup",
        buyLink: "https://www.sephora.com/search?keyword=estee%20lauder%20double%20wear",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556228852-80c0c0d309e6?w=400&h=400&fit=crop"
    },
    {
        id: 30,
        name: "Fenty Beauty Pro Filt'r Foundation",
        category: "makeup",
        price: 39.00,
        priceRange: "mid",
        skinTypes: ["normal", "oily", "combination"],
        description: "Soft matte longwear foundation",
        buyLink: "https://www.sephora.com/search?keyword=fenty%20foundation",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
    }
];

// Filter and display products
let currentFilters = {
    skinType: 'all',
    category: 'all',
    price: 'all'
};

function filterProducts() {
    let filtered = products;
    
    // Filter by skin type
    if (currentFilters.skinType !== 'all') {
        filtered = filtered.filter(p => p.skinTypes.includes(currentFilters.skinType));
    }
    
    // Filter by category
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilters.category);
    }
    
    // Filter by price range
    if (currentFilters.price !== 'all') {
        filtered = filtered.filter(p => p.priceRange === currentFilters.price);
    }
    
    return filtered;
}

function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p class="no-results">No products found matching your criteria. Try adjusting your filters.</p>';
        return;
    }
    
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-skin-types">
                    ${product.skinTypes.map(type => `<span class="skin-type-badge">${type}</span>`).join('')}
                </div>
                <div class="product-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                    ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    <span>${product.rating}</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <a href="${product.buyLink}" target="_blank" rel="noopener" class="btn btn-buy">
                        Buy Now <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeProducts() {
    // Display all products initially
    displayProducts(products);
    
    // Setup filter event listeners
    document.getElementById('skinTypeFilter').addEventListener('change', (e) => {
        currentFilters.skinType = e.target.value;
        displayProducts(filterProducts());
    });
    
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        displayProducts(filterProducts());
    });
    
    document.getElementById('priceFilter').addEventListener('change', (e) => {
        currentFilters.price = e.target.value;
        displayProducts(filterProducts());
    });
    
    document.getElementById('resetFilters').addEventListener('click', () => {
        currentFilters = {
            skinType: 'all',
            category: 'all',
            price: 'all'
        };
        document.getElementById('skinTypeFilter').value = 'all';
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('priceFilter').value = 'all';
        displayProducts(products);
    });
}

// Get products by skin type for recommendations
function getProductsBySkinType(skinType, limit = 6) {
    return products
        .filter(p => p.skinTypes.includes(skinType))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
} else {
    initializeProducts();
}
